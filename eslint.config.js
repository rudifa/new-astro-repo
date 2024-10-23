// eslint.config.js
import eslint from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts,astro}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'astro': eslintPluginAstro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      // Error prevention
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'no-constant-condition': 'error',

      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],

      // Best practices
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',

      // Spacing
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',

      // Modern JavaScript
      'arrow-body-style': ['error', 'as-needed'],
      'no-useless-constructor': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': ['error', {
        'array': true,
        'object': true
      }],
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    env: {
      jest: true,
      mocha: true,
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },
];
