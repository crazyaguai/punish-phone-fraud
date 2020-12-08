module.exports = {
  env: {
    browser: true,
    es2020: true,
    // es6: true,
    node: true,
  },
  globals: {},
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'],
  parser: 'esprima',
  parserOptions: {
    ecmaVersion: 2020,
    // ecmaVersion: 6,
  },
  plugins: [],
  settings: {},
  rules: {
    indent: ['error', 2],
    'no-console': ['off'],
    'linebreak-style': [0, 'error', 'windows'], // 换行配置 windows \r\n linux \n
  },
}
