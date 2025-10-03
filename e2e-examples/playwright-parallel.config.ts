import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config'

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  // Enable parallel execution
  fullyParallel: true,
  // Number of parallel workers
  workers: 4,
  
  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: 'node ./e2e-tests/server',
    port: 4345,
  },
  
  testMatch: '*mixed-tests/*.spec.ts',
  
  // Retry configuration for parallel runs
  retries: 1,
  
  // Test timeout
  timeout: 30 * 1000,
  
  // Global test setup
  use: {
    // Browser launch options
    headless: true,
    // Test artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report-parallel' }],
    ['@testomatio/reporter/lib/adapter/playwright.js', {
      apiKey: process.env.TESTOMATIO,
      title: 'Parallel Test Run',
    }]
  ],
  
  // Configure projects for different browsers (optional)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
};

export default config;