const baseTestDir = "<rootDir>/src/tests/";

const config = {
  preset: "@babel/preset-react",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  testMatch: [`${baseTestDir}/**/*test.js`],
};

module.exports = config;
