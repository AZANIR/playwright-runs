import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config'

// Configuration that mimics client's setup with multiple separate projects
const config: PlaywrightTestConfig = {
  // Enable parallel execution across projects
  fullyParallel: true,
  // Number of parallel workers (similar to client's 10 workers)
  workers: 6,
  
  // Test timeout
  timeout: 30 * 1000,
  
  // Global test setup
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report-mixed-projects' }],
    ['@testomatio/reporter/lib/adapter/playwright.js', {
      apiKey: process.env.TESTOMATIO,
      title: 'Mixed Projects Run - Like Client',
      // Add project-specific metadata
      runTitle: 'Multi-Project Parallel Execution',
      runDescription: 'Testing core-api and clinic-api projects simultaneously',
    }]
  ],
  
  // MAIN DIFFERENCE: Multiple separate projects like client has
  projects: [
    // Project 1: TM3-API equivalent (Core API tests)
    {
      name: 'core-api',
      testMatch: '**/mixed-projects/core-api/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        // Project-specific setup
        baseURL: 'https://api.core.local',
      },
      dependencies: ['setup-core'],
    },

    // Project 2: E-Clinic-API equivalent (Clinic API tests)  
    {
      name: 'clinic-api',
      testMatch: '**/mixed-projects/clinic-api/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        // Project-specific setup
        baseURL: 'https://api.clinic.local',
      },
      dependencies: ['setup-clinic'],
    },

    // Setup project for Core (like setup-tm3)
    {
      name: 'setup-core',
      testMatch: '**/mixed-projects/setups/setup-core.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Setup project for Clinic (like setup-ecl)
    {
      name: 'setup-clinic', 
      testMatch: '**/mixed-projects/setups/setup-clinic.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;