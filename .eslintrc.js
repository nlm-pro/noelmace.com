module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['compat'],
  rules: {
    'compat/compat': 'error',
  },
};
