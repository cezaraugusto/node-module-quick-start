import auditor from 'eslint-config-auditor'
import jest from 'eslint-config-auditor/jest'

export default [
  {ignores: ['dist/**', 'build/**', 'out/**', 'coverage/**', '**/__fixtures__/**', '**/fixtures/**', '**/__mocks__/**', '**/__snapshots__/**', '**/*.min.js', '**/vendor/**', '**/*.json', 'eslint.config.mjs']},
  ...auditor,
  ...jest.map((c) => ({
    ...c,
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}']
  }))
]
