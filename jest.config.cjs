/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/*.spec.ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!**/__mocks__/**",
    "!**/node_modules/**",
    "!**/*.d.ts",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.js`,
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  verbose: true,
  testTimeout: 30000,
};
