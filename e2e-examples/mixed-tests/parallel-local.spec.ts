import { test, expect } from '@playwright/test';

/**
 * Tests that use local server for parallel execution testing
 * These tests will run against the local server started by webServer config
 */
test.describe('Local Server Parallel Tests', () => {
  test('local server test 1 - homepage', async ({ page }) => {
    await page.goto('http://localhost:4345');
    
    await expect(page).toHaveTitle(/Playwright Example/);
    
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Welcome to Playwright Examples');
  });

  test('local server test 2 - file upload page', async ({ page }) => {
    await page.goto('http://localhost:4345/file-uploads.html');
    
    const uploadInput = page.locator('input[type="file"]');
    await expect(uploadInput).toBeVisible();
    
    const submitButton = page.locator('input[type="submit"]');
    await expect(submitButton).toBeVisible();
  });

  test('local server test 3 - network page', async ({ page }) => {
    await page.goto('http://localhost:4345/network.html');
    
    const fetchButton = page.locator('button:has-text("Fetch Users")');
    await expect(fetchButton).toBeVisible();
    
    // Click button and wait for response
    await fetchButton.click();
    
    // Wait for users list to appear
    const usersList = page.locator('#users-list');
    await expect(usersList).toBeVisible();
  });

  test('local server test 4 - API endpoint', async ({ page }) => {
    // Test the API endpoint directly
    const response = await page.request.get('http://localhost:4345/api/v1/users.json');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
    
    // Navigate to page and verify data is displayed
    await page.goto('http://localhost:4345/network.html');
    const fetchButton = page.locator('button:has-text("Fetch Users")');
    await fetchButton.click();
    
    const usersList = page.locator('#users-list li');
    await expect(usersList.first()).toBeVisible();
  });
});