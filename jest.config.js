module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./tests/integration/setup.js'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/tests/',
      '/src/server.js'
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };