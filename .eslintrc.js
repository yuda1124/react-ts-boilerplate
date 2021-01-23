module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-undef': [0],
    'import/no-unresolved': 'off',
    'import/extensions': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    semi: 'warn',
    'no-console': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};
