module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    '!src/components/**/*.stories.tsx',
    'src/functions/**.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  }
};