const baseTestDir = "<rootDir>/tests/";

const config = {
  preset: "@babel/preset-react",
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  testMatch: [`${baseTestDir}/**/*test.js`],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
  },
};

module.exports = config;
