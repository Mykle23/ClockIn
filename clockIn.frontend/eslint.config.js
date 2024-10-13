import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsLint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import react from 'eslint-plugin-react';

export default defineFlatConfig([
    {
        ignores: ['./dist'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: tsParser,
            globals: { ...globals.browser },
        },
        plugins: {
            '@typescript-eslint': tsLint,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettier,
            react: react,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsLint.configs['recommended'].rules,
            ...reactHooks.configs.recommended.rules,
            ...react.configs.flat.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            ...prettier.configs.recommended.rules,
            ...react.configs.flat['jsx-runtime'].rules,
            prettier: [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]);
