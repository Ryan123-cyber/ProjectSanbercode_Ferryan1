const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Setup untuk Cucumber Preprocessor
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Event listeners lainnya bisa ditambahkan di sini
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Menentukan lokasi file .feature
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    supportFile: "cypress/support/e2e.js"
    // Base URL untuk pengujian e2e
  },

  component: {
    devServer: {
      framework: "react", // Framework React untuk testing komponen
      bundler: "vite" // Menggunakan Vite sebagai bundler
    }
  }
});
