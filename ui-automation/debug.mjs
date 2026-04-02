import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000/";

let browser;
try {
  browser = await chromium.launch({ headless: true, channel: "msedge" });
} catch {
  browser = await chromium.launch({ headless: true });
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(800);

const locator = page.getByRole("button", { name: /launch console/i });
const count = await locator.count();
console.log("found", count);

if (count > 0) {
  const styles = await locator.first().evaluate((el) => {
    const s = getComputedStyle(el);

    const map = typeof el.computedStyleMap === "function" ? el.computedStyleMap() : null;
    const mapColor = map?.get?.("color")?.toString?.();
    const mapBg = map?.get?.("background-color")?.toString?.();

    return {
      computed: {
        color: s.color,
        backgroundColor: s.backgroundColor,
      },
      styleMap: {
        color: mapColor || null,
        backgroundColor: mapBg || null,
      },
    };
  });
  console.log(JSON.stringify(styles, null, 2));
}

await browser.close();
