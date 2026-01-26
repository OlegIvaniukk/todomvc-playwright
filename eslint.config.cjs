// eslint.config.js (CommonJS, flat config для ESLint v9)
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommended: true,
});

module.exports = [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),

  {
    ignores: ['node_modules', 'test-results', 'playwright-report'],
  },

  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
];
