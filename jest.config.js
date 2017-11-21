module.exports = {
    verbose: true,
    setupTestFrameworkScriptFile: './src/test/setupTests.js',
    collectCoverageFrom : ['**/src/app/src/**/*.js', '!**/index.js', '!**/*.styles.js'],
    collectCoverage: true,
    coverageDirectory: './coverage'
};