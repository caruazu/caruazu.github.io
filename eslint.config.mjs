// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // presets do Next para TS + Web Vitals
  ...compat.config({ extends: ["next/typescript", "next/core-web-vitals"] }),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "max-statements-per-line": ["error", { max: 1 }],
    },
  },
];
