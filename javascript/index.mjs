export const CacheESLintConfig = {
  languageOptions: { globals: { Stimulus: 'readonly' } },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': 'error',
    'curly': ['error', 'multi-line'],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-duplicate-imports': ['error'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-self-assign': ['error', { 'props': false }],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['error', {
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_'
    }],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'eqeqeq': ['error', 'smart']
  }
}
