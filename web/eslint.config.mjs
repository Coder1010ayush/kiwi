import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Generated types:
    "src/lib/api/schema.d.ts",
  ]),

  // React Hook Form triggers a noisy warning with the React Compiler lint rule.
  {
    rules: {
      "react-hooks/incompatible-library": "off",
    },
  },
]);
