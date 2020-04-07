module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier',
    'prettier/standard',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 4],
    semi: 'off',
    "prettier/prettier": "error"
  },
};
