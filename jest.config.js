export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
