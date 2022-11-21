exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ['@mate-academy/eslint-config-react'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: ['react'],
  rules: {}
};
