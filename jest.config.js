export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Reporte de pruebas",
        outputPath: "./test-report.html",
      },
    ],
  ],
};
