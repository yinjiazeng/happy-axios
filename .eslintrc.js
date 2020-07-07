module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'dot-notation': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
};
