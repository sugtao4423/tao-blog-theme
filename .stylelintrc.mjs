/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
  ],
  ignoreFiles: ['**/node_modules/**', 'assets/css/screen.min.css'],
  rules: {
    'scss/at-extend-no-missing-placeholder': null,
  },
  overrides: [
    {
      files: ['assets/sass/_variables.scss'],
      rules: {
        'scss/dollar-variable-empty-line-before': null,
      },
    },
  ],
}
