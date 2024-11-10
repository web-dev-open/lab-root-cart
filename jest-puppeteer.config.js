module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/tests/**/*.spec.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Optional: if you have a setup file
};