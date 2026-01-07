const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

module.exports = [
    {
        files: ['**/*.ts'],
        ignores: ['node_modules', 'dist'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: globals.node
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            import: importPlugin
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true
                }
            }
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            'no-console': 'off',
            'import/prefer-default-export': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            semi: ['error', 'always'],
            'eol-last': ['error', 'always'],
            quotes: ['error', 'single'],
            'import/no-unresolved': 'error'
        }
    }
];
