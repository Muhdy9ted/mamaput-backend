import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      'node_modules/',
      '**/*.svg',
      '**/*.csv',
      '**/*.css',
      '**/*.md',
      '**/*.yml',
      '**/*.json',
      '**/bash/*',
      '**/Dockerfile*',
    ]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'indent': ['error', 2], // 2 spaces
      'quotes': ['error', 'single'], // double quotes
      'semi': ['error', 'always'], // always semicolon
      'no-console': 'warn', // warn about console.log
      'no-unused-vars': 'warn', // warn about unused variables
      'no-undef': 'warn', // warn about undefined variables
      'no-constant-condition': 'warn', // warn about constant conditions
      'no-irregular-whitespace': 'warn', // warn about irregular whitespace
      'no-unreachable': 'warn', // warn about unreachable code
      'prefer-const': 'error', // prefer const over let
      'no-var': 'error', // prefer const or let over var
      'no-const-assign': 'error', // disallow reassigning const variables
    }
  }
];

// rules: {
//   "eqeqeq": ["error", "always"],
//   "curly": "error",
//   "consistent-return": "error",
//   "prefer-arrow-callback": "error",
//   "no-console": "warn",
//   "node/no-unsupported-features/es-syntax": "off",
// 'node/no-missing-import': ['error', { 
//   'tryExtensions': ['.js', '.mjs', '.cjs', '.ts', '.tsx', '.json'] 
// }], // warn about missing imports
//   "node/no-missing-import": "error",
//   "node/no-process-exit": "error",
//   "import/order": ["error", { "alphabetize": { "order": "asc" } }]
// },