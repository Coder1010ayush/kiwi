import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000/settings";
const theme = process.argv[3] || "light";

let browser;
try {
  browser = await chromium.launch({ headless: true, channel: "msedge" });
} catch {
  browser = await chromium.launch({ headless: true });
}

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
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(800);

const link = page.getByRole("link", { name: /^settings$/i });
console.log("link count", await link.count());

if ((await link.count()) > 0) {
  const info = await link.first().evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      className: el.className,
      color: s.color,
      backgroundColor: s.backgroundColor,
    };
  });
  console.log(JSON.stringify(info, null, 2));
}

await context.close();
await browser.close();
