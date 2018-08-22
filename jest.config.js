module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/spec_helper.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/__tests__/__mocks__/',
    '<rootDir>/src/__tests__/spec_helper.js',
  ],
}
