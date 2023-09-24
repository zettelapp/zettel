import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'e2e/support/e2e.{js,jsx,ts,tsx}',
    fixturesFolder: 'e2e/fixtures',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
