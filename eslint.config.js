import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
// standard could not be migrated to ESLint v9, have a look at neostandard later

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
    ignores: [ ".vercel/" ]
  }
];
