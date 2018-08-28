module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js?(x)',
      '__tests__/spec_helper.js',
      '!__tests__/**/*.spec.js?(x)',
    ],
    tests: ['__tests__/**/*.spec.js?(x)'],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel(),
    },

    testFramework: 'jest',

    debug: true,
  }
}
