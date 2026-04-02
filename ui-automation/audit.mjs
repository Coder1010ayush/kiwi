import fs from "node:fs/promises";
import path from "node:path";

import { chromium } from "playwright";

const BASE_URL = process.env.KIWI_BASE_URL || "http://localhost:3000";
const OUT_DIR = process.env.KIWI_AUDIT_OUT_DIR || path.resolve("artifacts");

const PAGES = [
  { name: "home", path: "/" },
  { name: "login", path: "/login" },
  { name: "settings", path: "/settings" },
  { name: "dashboard", path: "/dashboard" },
  { name: "ingestion", path: "/ingestion" },
  { name: "knowledge-bases", path: "/knowledge-bases" },
];

function safeFilename(s) {
  return s.replace(/[^a-z0-9._-]+/gi, "-");
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(
    d.getMinutes(),
  )}${pad(d.getSeconds())}`;
}

async function main() {
  const runId = nowStamp();
  const runDir = path.join(OUT_DIR, `run-${runId}`);
  await ensureDir(runDir);

  console.log(`[audit] Base URL: ${BASE_URL}`);
  console.log(`[audit] Output:   ${runDir}`);

  let browser;
  try {
    // Avoid large Playwright browser downloads; use the locally installed Edge/Chrome if available.
    browser = await chromium.launch({ headless: true, channel: "msedge" });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  try {
    const results = [];

    for (const theme of ["light", "dark"]) {
      let context;
      try {
        context = await browser.newContext({
          viewport: { width: 1440, height: 900 },
        });
      } catch (err) {
        // If the browser crashed between themes, relaunch and retry once.
        try {
          await browser.close();
        } catch {
          // ignore
        }
        try {
          browser = await chromium.launch({ headless: true, channel: "msedge" });
        } catch {
          browser = await chromium.launch({ headless: true });
        }
        context = await browser.newContext({
          viewport: { width: 1440, height: 900 },
        });
      }

      // Set theme + config before any page script runs.
      await context.addInitScript((themeValue) => {
        try {
          localStorage.setItem("theme", themeValue);
          localStorage.setItem(
            "kiwi:config",
            JSON.stringify({
              state: {
                apiBaseUrl: "https://api.meetkiwi.ai",
                authMode: "apiKey",
                apiKey: "",
                bearerToken: "",
              },
              version: 1,
            }),
          );
        } catch {
          // ignore
        }
      }, theme);

      const page = await context.newPage();

      for (const p of PAGES) {
        const url = BASE_URL.replace(/\/$/, "") + p.path;
        console.log(`\n[audit] (${theme}) visiting ${url}`);

        const res = await page.goto(url, { waitUntil: "domcontentloaded" });
        const status = res?.status() ?? null;

        // Wait a bit for hydration / layout.
        await page.waitForTimeout(700);

        const shotPath = path.join(runDir, `${safeFilename(p.name)}.${theme}.png`);
        await page.screenshot({ path: shotPath, fullPage: true });

        const issues = await page.evaluate(() => {
          function clamp01(n) {
            return Math.max(0, Math.min(1, n));
          }

          function parseColor(value) {
            // Tailwind v4 often produces computed colors in CSS Color 4 formats like lab()/oklch().
            // We only need an approximate luminance to catch egregious "white-on-white" failures.
            const v = String(value || "").trim().toLowerCase();
            if (!v) return null;
            if (v === "transparent") return { kind: "transparent", a: 0, l: null, raw: v };

            // rgb()/rgba() - supports both comma and space syntax: rgb(0,0,0) or rgb(0 0 0 / 1)
            const mRgb = v.match(
              /rgba?\(\s*(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*(?:\/|,)\s*([\d.]+))?\s*\)/,
            );
            if (mRgb) {
              const r = Number(mRgb[1]);
              const g = Number(mRgb[2]);
              const b = Number(mRgb[3]);
              const a = mRgb[4] == null ? 1 : Number(mRgb[4]);

              // Perceived lightness heuristic (fast). We use this to catch obvious low-contrast cases.
              const l = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

              return { kind: "rgb", r, g, b, a, l: clamp01(l), raw: v };
            }

            // oklab(L a b / alpha?)  (L can be 0..1 or percent)
            const mOklab = v.match(/^oklab\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+))?\s*\)/);
            if (mOklab) {
              const rawL = Number(mOklab[1]);
              const isPercent = mOklab[2] === "%";
              const L = isPercent ? rawL / 100 : rawL;
              const a = mOklab[3] == null ? 1 : Number(mOklab[3]);
              return { kind: "oklab", L, a, l: clamp01(L), raw: v };
            }

            // lab(L a b / alpha?)  (L is 0..100)
            const mLab = v.match(/^lab\(\s*([\d.]+)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+))?\s*\)/);
            if (mLab) {
              const L = Number(mLab[1]);
              const a = mLab[2] == null ? 1 : Number(mLab[2]);
              return { kind: "lab", L, a, l: clamp01(L / 100), raw: v };
            }

            // oklch(L C H / alpha?)  (L can be 0..1 or percent)
            const mOklch = v.match(/^oklch\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+(?:\s*\/\s*([\d.]+))?\s*\)/);
            if (mOklch) {
              const rawL = Number(mOklch[1]);
              const isPercent = mOklch[2] === "%";
              const L = isPercent ? rawL / 100 : rawL;
              const a = mOklch[3] == null ? 1 : Number(mOklch[3]);
              return { kind: "oklch", L, a, l: clamp01(L), raw: v };
            }

            return null;
          }

          function isVisible(el) {
            const rect = el.getBoundingClientRect();
            if (rect.width < 2 || rect.height < 2) return false;
            const style = window.getComputedStyle(el);
            if (style.visibility !== "visible") return false;
            if (style.display === "none") return false;
            if (Number(style.opacity) === 0) return false;
            return true;
          }

          function getEffectiveBackground(el) {
            let cur = el;
            while (cur) {
              const bg = window.getComputedStyle(cur).backgroundColor;
              const parsed = parseColor(bg);
              if (parsed && parsed.a === 0) {
                cur = cur.parentElement;
                continue;
              }
              if (parsed && parsed.l != null) return parsed;
              cur = cur.parentElement;
            }
            // default white
            return { kind: "rgb", r: 255, g: 255, b: 255, a: 1, l: 1, raw: "rgb(255 255 255)" };
          }

          function lightnessDiff(fgL, bgL) {
            return Math.abs(fgL - bgL);
          }

          function cssPath(el) {
            if (!(el instanceof Element)) return "";
            const parts = [];
            let cur = el;
            while (cur && parts.length < 5) {
              const tag = cur.tagName.toLowerCase();
              const id = cur.id ? `#${cur.id}` : "";
              const cls = cur.className && typeof cur.className === "string" ? "." + cur.className.trim().split(/\s+/).slice(0, 3).join(".") : "";
              parts.unshift(`${tag}${id}${cls}`);
              cur = cur.parentElement;
            }
            return parts.join(" > ");
          }

          const nodes = Array.from(document.querySelectorAll("body *"));
          const issues = [];

          for (const el of nodes) {
            if (!(el instanceof HTMLElement)) continue;
            if (!isVisible(el)) continue;

            const text = (el.innerText || "").trim();
            if (!text) continue;
            if (text.length > 160) continue; // avoid huge blocks

            const style = window.getComputedStyle(el);
            const fg = parseColor(style.color);
            if (!fg || fg.a === 0 || fg.l == null) continue;

            const bg = getEffectiveBackground(el);
            if (!bg || bg.a === 0 || bg.l == null) continue;

            const diff = lightnessDiff(fg.l, bg.l);

            // Flag only "almost same color" cases (white-on-white, dark-on-dark).
            if (diff < 0.12) {
              issues.push({
                text,
                diff: Number(diff.toFixed(3)),
                fg: { raw: fg.raw, kind: fg.kind, l: Number(fg.l.toFixed(4)) },
                bg: { raw: bg.raw, kind: bg.kind, l: Number(bg.l.toFixed(4)) },
                selector: cssPath(el),
              });
            }
          }

          // Sort worst first
          issues.sort((a, b) => a.diff - b.diff);
          return issues.slice(0, 60);
        });

        const pageResult = {
          theme,
          page: p,
          url,
          status,
          screenshot: shotPath,
          issues,
        };

        results.push(pageResult);

        console.log(`[audit] (${theme}) ${p.name}: status=${status}, issues=${issues.length}`);
      }

      try {
        await page.close();
      } catch {
        // ignore close errors
      }
      try {
        await context.close();
      } catch {
        // ignore close errors
      }
    }

    const outJson = path.join(runDir, `report.json`);
    await fs.writeFile(outJson, JSON.stringify(results, null, 2), "utf8");

    console.log(`\n[audit] Done. Report: ${outJson}`);
    console.log(`[audit] Screenshots are in: ${runDir}`);

    // Print a concise summary of the worst (closest colors) across all pages/themes.
    const flattened = results.flatMap((r) =>
      r.issues.map((i) => ({
        theme: r.theme,
        page: r.page.name,
        diff: i.diff,
        text: i.text,
        selector: i.selector,
      })),
    );

    flattened.sort((a, b) => a.diff - b.diff);

    console.log("\n[audit] Worst 15 low-contrast candidates (lightness diff):");
    for (const row of flattened.slice(0, 15)) {
      console.log(`- (${row.theme}) ${row.page} diff=${row.diff} text=${JSON.stringify(row.text)} sel=${row.selector}`);
    }
  } finally {
    try {
      await browser.close();
    } catch {
      // ignore close errors
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
