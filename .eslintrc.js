module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:prettier/recommended',
        'prettier',
        'eslint:recommended'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        "no-console": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "semi": ["error", "always"],
        "eol-last": ["error", "always"],
        "quotes": ["error", "single"]
    },
};
