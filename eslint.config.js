// eslint.config.js
import eslint from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  eslint.configs.recommended,
  {
    // TypeScript files configuration
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    // TypeScript declaration files configuration
    files: ['**/*.d.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    // Astro files configuration
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      astro: eslintPluginAstro,
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    // Common rules for all files
    files: ['**/*.{js,ts,astro}'],
    rules: {
      // Error prevention
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',

      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];
