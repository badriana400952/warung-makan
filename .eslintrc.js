module.exports = {
  root: true,
  extends: [
    'next',
    'eslint:recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'react/jsx-sort-props': 'off',
    'unused-imports/no-unused-imports': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'off', // Matikan Prettier di ESLint
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'prettier/prettier': 'off', // Pastikan di semua file dimatikan
      },
    },
  ],
};
