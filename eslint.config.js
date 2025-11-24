// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])


// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   extends: [
//     'airbnb',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   plugins: ['react'],
//   rules: {
//     'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//     'react/react-in-jsx-scope': 'off',
//     'import/no-unresolved': 'off',
//     'no-shadow': 'off',
//   },
//   ignorePatterns: ['dist/', 'build/'],
//   overrides: [
//     {
//       files: ['src/**/*Slice.js'],
//       rules: { 'no-param-reassign': ['error', { props: false }] },
//     },
//   ],
// };


// eslint.config.js
// export default {
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   extends: [
//     'airbnb',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   plugins: ['react'],
//   rules: {
//     'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//     'react/react-in-jsx-scope': 'off',
//     'import/no-unresolved': 'off',
//     'no-shadow': 'off',
//   },
//   ignorePatterns: ['dist/', 'build/'],
//   overrides: [
//     {
//       files: ['src/**/*Slice.js'],
//       rules: { 'no-param-reassign': ['error', { props: false }] },
//     },
//   ],
// };


// eslint.config.js
// export default {
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   extends: [
//     'airbnb',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   plugins: ['react'],
//   rules: {
//     'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//     'react/react-in-jsx-scope': 'off',
//     'import/no-unresolved': 'off',
//     'no-shadow': 'off',
//   },
//   ignorePatterns: ['dist/', 'build/'],
//   overrides: [
//     {
//       files: ['src/**/*Slice.js'],
//       rules: { 'no-param-reassign': ['error', { props: false }] },
//     },
//   ],
// };


// import js from '@eslint/js'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import globals from 'globals'

// export default [
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       parser: '@babel/eslint-parser',
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: { jsx: true },
//       },
//       globals: { ...globals.browser, ...globals.es6 },
//     },
//     plugins: {
//       reactHooks,
//       reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//       'react/react-in-jsx-scope': 'off',
//       'import/no-unresolved': 'off',
//       'no-shadow': 'off',
//     },
//   },
//   {
//     files: ['src/**/*Slice.js'],
//     rules: {
//       'no-param-reassign': ['error', { props: false }],
//     },
//   },
// ]


// eslint.config.js
// import js from '@eslint/js'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import babelParser from '@babel/eslint-parser'
// import globals from 'globals'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   // Ignore dist/build
//   globalIgnores(['dist', 'build']),

//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false, // no need for .babelrc
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: { jsx: true },
//       },
//       globals: { ...globals.browser },
//     },
//     plugins: {
//       reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       // custom rules
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//       'react/react-in-jsx-scope': 'off',
//       'import/no-unresolved': 'off',
//       'no-shadow': 'off',
//     },
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//   },
// ])


// eslint.config.js
// import js from '@eslint/js'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import babelParser from '@babel/eslint-parser'
// import globals from 'globals'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist', 'build']),
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: { jsx: true },
//       },
//       globals: { ...globals.browser },
//     },
//     plugins: {
//       reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//       'react/react-in-jsx-scope': 'off',
//       'import/no-unresolved': 'off',
//       'no-shadow': 'off',
//     },
//     extends: [
//   js.configs.flat.recommended,       // <-- changed from js.configs.recommended
//   reactHooks.configs.flat.recommended,
//   reactRefresh.configs.vite,
// ]
// ,
//   },
// ])


// eslint.config.cjs
// const { defineConfig, globalIgnores } = require('eslint/config')
// const js = require('@eslint/js')
// const reactHooks = require('eslint-plugin-react-hooks')
// const reactRefresh = require('eslint-plugin-react-refresh')
// const babelParser = require('@babel/eslint-parser')
// const globals = require('globals')

// module.exports = defineConfig([
//   globalIgnores(['dist', 'build']),

//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: { jsx: true },
//       },
//       globals: { ...globals.browser },
//     },
//     plugins: {
//       reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
//       'react/react-in-jsx-scope': 'off',
//       'import/no-unresolved': 'off',
//       'no-shadow': 'off',
//     },
//     extends: [
//       js.configs.flat.recommended,      // ✅ flat config
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//   },
// ])


// eslint.config.js
// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])

// import { flat } from '@eslint/js'

// export default defineConfig([
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       flat.configs.recommended, // ← use flat.configs
//     ],
//     languageOptions: {
//       parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
//       globals: globals.browser,
//     },
//     plugins: {
//       reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])

// eslint.config.js
import jsPkg from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

const js = jsPkg

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended, // works
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])








