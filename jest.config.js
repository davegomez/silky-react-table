module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/spec_helper.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__mocks__/',
    '<rootDir>/__tests__/spec_helper.js',
  ],
}
