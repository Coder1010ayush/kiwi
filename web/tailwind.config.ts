import type { Config } from "tailwindcss";

export default {
  // We use next-themes which toggles a `.dark` class on the root element.
  // Tailwind's default is prefers-color-scheme media query; we need class-based dark mode
  // to avoid mismatched foreground/background (e.g., white text on white cards).
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
