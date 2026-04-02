import { chromium } from "playwright";

const BASE_URL = process.env.KIWI_BASE_URL || "http://localhost:3000";
const PAGES = ["/", "/login", "/settings", "/dashboard", "/ingestion", "/knowledge-bases"];

function parseRgbLike(value) {
  // matches rgb(1, 2, 3) and rgb(1 2 3 / 1)
  const m = value.match(
    /rgba?\(\s*(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*(?:\/|,)\s*([\d.]+))?\s*\)/,
  );
  if (!m) return null;
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
}

function lightnessFromColorString(value) {
  const v = String(value).trim().toLowerCase();

  const rgb = parseRgbLike(v);
  if (rgb) {
    // simple perceived brightness (fast heuristic)
    return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  }

  // CSS Color 4 lab(...)
  const lab = v.match(/lab\(\s*([\d.]+)\s+[-\d.]+\s+[-\d.]+\s*\)/);
  if (lab) {
    const L = Number(lab[1]);
    if (Number.isFinite(L)) return Math.max(0, Math.min(1, L / 100));
  }

  // oklch(L C H / a)
  const oklch = v.match(/oklch\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+/);
  if (oklch) {
    const raw = Number(oklch[1]);
    if (Number.isFinite(raw)) {
      const isPercent = oklch[2] === "%";
      const L = isPercent ? raw / 100 : raw;
      return Math.max(0, Math.min(1, L));
    }
  }

  return null;
}

function safeText(s) {
  return s.replace(/\s+/g, " ").slice(0, 140);
}

let browser;
try {
  browser = await chromium.launch({ headless: true, channel: "msedge" });
} catch {
  browser = await chromium.launch({ headless: true });
}

try {
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

    await context.addInitScript((themeValue) => {
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
    }, theme);

    const page = await context.newPage();

    for (const p of PAGES) {
      const url = BASE_URL.replace(/\/$/, "") + p;
      const res = await page.goto(url, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(600);

      const findings = await page.evaluate(() => {
        function parseRgbLike(value) {
          const m = String(value)
            .trim()
            .toLowerCase()
            .match(
              /rgba?\(\s*(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*,\s*|\s+)(\d+)(?:\s*(?:\/|,)\s*([\d.]+))?\s*\)/,
            );
          if (!m) return null;
          return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
        }

        function lightnessFromColorString(value) {
          const v = String(value).trim().toLowerCase();
          const rgb = parseRgbLike(v);
          if (rgb) return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;

          const lab = v.match(/lab\(\s*([\d.]+)\s+[-\d.]+\s+[-\d.]+\s*\)/);
          if (lab) {
            const L = Number(lab[1]);
            if (Number.isFinite(L)) return Math.max(0, Math.min(1, L / 100));
          }

          const oklch = v.match(/oklch\(\s*([\d.]+)(%?)\s+[-\d.]+\s+[-\d.]+/);
          if (oklch) {
            const raw = Number(oklch[1]);
            if (Number.isFinite(raw)) {
              const isPercent = oklch[2] === "%";
              const L = isPercent ? raw / 100 : raw;
              return Math.max(0, Math.min(1, L));
            }
          }

          return null;
        }

        function isVisible(el) {
          const rect = el.getBoundingClientRect();
          if (rect.width < 2 || rect.height < 2) return false;
          const s = getComputedStyle(el);
          if (s.visibility !== "visible") return false;
          if (s.display === "none") return false;
          if (Number(s.opacity) === 0) return false;
          return true;
        }

        function getEffectiveBackground(el) {
          let cur = el;
          while (cur) {
            const bg = getComputedStyle(cur).backgroundColor;
            // if it's not transparent, stop
            if (!String(bg).includes("rgba(0, 0, 0, 0)")) return bg;
            cur = cur.parentElement;
          }
          return "rgb(255, 255, 255)";
        }

        function cssPath(el) {
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
          if (!text || text.length > 160) continue;

          const s = getComputedStyle(el);
          const fg = s.color;
          const bg = getEffectiveBackground(el);

          const fgL = lightnessFromColorString(fg);
          const bgL = lightnessFromColorString(bg);
          if (fgL == null || bgL == null) continue;

          // specifically catch "white on white" or "dark on dark" style failures
          const diff = Math.abs(fgL - bgL);
          if (diff < 0.12) {
            issues.push({
              text,
              fg,
              bg,
              fgL: Number(fgL.toFixed(3)),
              bgL: Number(bgL.toFixed(3)),
              diff: Number(diff.toFixed(3)),
              selector: cssPath(el),
            });
          }
        }

        issues.sort((a, b) => a.diff - b.diff);
        return issues.slice(0, 25);
      });

      const status = res?.status() ?? null;
      console.log(`[verify] theme=${theme} url=${p} status=${status} issues=${findings.length}`);
      if (findings.length) {
        console.log(JSON.stringify(findings.slice(0, 5), null, 2));
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}
