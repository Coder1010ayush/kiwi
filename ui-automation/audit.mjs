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
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
      });

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
          function parseRgb(value) {
            // Supports both legacy comma syntax: rgb(0, 0, 0) and modern syntax: rgb(0 0 0 / 1)
            const m = value.match(
              /rgba?\(\s*(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*(?:\/|,)\s*([\d.]+))?\s*\)/,
            );
            if (!m) return null;
            return {
              r: Number(m[1]),
              g: Number(m[2]),
              b: Number(m[3]),
              a: m[4] == null ? 1 : Number(m[4]),
            };
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
              const rgb = parseRgb(bg);
              if (rgb && rgb.a !== 0) return rgb;
              cur = cur.parentElement;
            }
            // default white
            return { r: 255, g: 255, b: 255, a: 1 };
          }

          function luminance({ r, g, b }) {
            const srgb = [r, g, b].map((v) => v / 255).map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
            return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
          }

          function contrastRatio(fg, bg) {
            const L1 = luminance(fg);
            const L2 = luminance(bg);
            const lighter = Math.max(L1, L2);
            const darker = Math.min(L1, L2);
            return (lighter + 0.05) / (darker + 0.05);
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
            const fg = parseRgb(style.color);
            if (!fg) continue;

            const bg = getEffectiveBackground(el);

            const ratio = contrastRatio(fg, bg);

            // Determine threshold (rough WCAG):
            const fontSize = parseFloat(style.fontSize || "16");
            const fontWeight = parseInt(style.fontWeight || "400", 10);
            const isLarge = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
            const threshold = isLarge ? 3.0 : 4.5;

            // Flag only genuinely bad contrast.
            if (ratio < threshold) {
              issues.push({
                text,
                ratio: Number(ratio.toFixed(2)),
                fg,
                bg,
                fontSize,
                fontWeight,
                selector: cssPath(el),
              });
            }
          }

          // Sort worst first
          issues.sort((a, b) => a.ratio - b.ratio);
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

    // Print a concise summary of the worst issues across all pages/themes.
    const flattened = results.flatMap((r) =>
      r.issues.map((i) => ({
        theme: r.theme,
        page: r.page.name,
        ratio: i.ratio,
        text: i.text,
        selector: i.selector,
      })),
    );

    flattened.sort((a, b) => a.ratio - b.ratio);

    console.log("\n[audit] Worst 15 contrast issues:");
    for (const row of flattened.slice(0, 15)) {
      console.log(`- (${row.theme}) ${row.page} ratio=${row.ratio} text=${JSON.stringify(row.text)} sel=${row.selector}`);
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
