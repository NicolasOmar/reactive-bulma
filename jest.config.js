export default {
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    '!src/components/**/*.stories.tsx',
    'src/functions/**.ts'
  ],
  testMatch: ['**/**/*.test.tsx'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleNameMapper: {
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@design/(.*)$': '<rootDir>/src/design/$1',
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@customTypes/(.*)$': '<rootDir>/src/types/$1'
  },
};