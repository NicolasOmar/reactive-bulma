import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// This config lives in configs/, so rootDir and the babel config path are
// resolved explicitly against the repo root instead of relying on defaults
// (which would otherwise point at configs/).
const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

export default {
  rootDir,
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      { configFile: resolve(__dirname, './babel.config.cjs') }
    ]
  },
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