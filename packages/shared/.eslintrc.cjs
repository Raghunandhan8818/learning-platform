module.exports = {
  extends: ['../../.eslintrc.cjs'],
  env: {
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Shared package doesn't need React
  },
};
