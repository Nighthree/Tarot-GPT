module.exports = {
  printWidth: 150,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.html',
      options: {
        singleAttributePerLine: false,
      },
    },
  ],
};
