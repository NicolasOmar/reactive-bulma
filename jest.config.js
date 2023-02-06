module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.stories.tsx'
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