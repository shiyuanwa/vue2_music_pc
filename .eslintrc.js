module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', ''],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 300 }],
    'vue/multi-word-component-names': 'off',
    'linebreak-style': 'off',
  },
};
