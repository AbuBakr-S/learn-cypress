import { defineConfig } from "cypress";

export default defineConfig({
  numTestsKeptInMemory:10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
