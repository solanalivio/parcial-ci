const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            indent: ['error', 4],
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    },
];