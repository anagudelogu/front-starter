import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  yaml: false,
  toml: false,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single',
  },
}, {
  rules: {
    'no-console': ['warn'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'perfectionist/sort-imports': [
      'error',
      {
        tsconfigRootDir: '.',
        internalPattern: ['^@/.*'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['README.md'],
      },
    ],
  },
})
