module.exports = {
    extends: ['next', 'eslint:recommended'],
    rules: {
        'react/jsx-sort-props': 'off',
        'linebreak-style': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal'],
                'newlines-between': 'always',
            },
        ],
    },
};
