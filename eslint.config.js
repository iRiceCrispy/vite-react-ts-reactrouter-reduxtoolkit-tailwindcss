import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import { importX } from 'eslint-plugin-import-x'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tsConfigs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite(),
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      stylistic.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    rules: {
      'eqeqeq': ['error', 'smart'],
      'no-empty': ['error', { allowEmptyCatch: true }],
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/no-unused-vars': [
        'error', {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/exports-last': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/order': [
        'error', {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'distinctGroup': false,
          'newlines-between': 'never',
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'named': true,
          'sortTypesGroup': true,
        },
      ],
      '@stylistic/array-bracket-newline': 'error',
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/one-var-declaration-per-line': 'error',
      '@stylistic/switch-colon-spacing': 'error',
    },
  },
])
