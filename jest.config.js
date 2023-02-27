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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  }
};