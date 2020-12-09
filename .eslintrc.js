module.exports = {
  env: {
    browser: true,
    es2020: true,
    // es6: true,
    node: true,
  },
  globals: {},
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parser: 'esprima',
  parserOptions: {
    ecmaVersion: 2020,
    // ecmaVersion: 6,
  },
  plugins: [],
  settings: {},
  rules: {
    'no-plusplus': ['off'],
    'eol-last': ['off'],
    strict: ['off'],
    indent: ['error', 2],
    'no-console': ['off'],
    'linebreak-style': [0, 'error', 'windows'], // 换行配置 windows \r\n linux \n
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
  },
}
