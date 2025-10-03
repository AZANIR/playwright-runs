import { test, expect } from '@playwright/test';

/**
 * Slow parallel test with delays to test parallel execution
 * @see https://playwright.dev/docs/test-parallel
 */
test.describe('Slow Parallel Tests', () => {
  test('slow test 1 - with delays', async ({ page }) => {
    await page.goto('https://httpbin.org/delay/2');
    
    // Simulate slow loading
    await page.waitForTimeout(3000);
    
    const jsonContent = page.locator('pre');
    await expect(jsonContent).toBeVisible();
    await expect(jsonContent).toContainText('origin');
  });

  test('slow test 2 - multiple operations', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Simulate slow user interactions
    await page.waitForTimeout(2000);
    
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    await page.waitForTimeout(2000);
    
    const paragraphs = page.locator('p');
    await expect(paragraphs.first()).toBeVisible();
  });

  test('slow test 3 - image loading simulation', async ({ page }) => {
    await page.goto('https://httpbin.org/image/png');
    
    // Wait for image to load
    await page.waitForTimeout(3000);
    
    // Check if page loaded successfully
    await expect(page).toHaveURL(/.*httpbin\.org\/image\/png.*/);
  });
});