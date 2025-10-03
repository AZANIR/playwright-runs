import { test, expect } from '@playwright/test';

/**
 * Fast parallel test for quick execution
 * @see https://playwright.dev/docs/test-parallel
 */
test.describe('Fast Parallel Tests', () => {
  test('fast test 1 - basic navigation', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
    
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Example Domain');
  });

  test('fast test 2 - simple form interaction', async ({ page }) => {
    await page.goto('https://httpbin.org/forms/post');
    
    await page.fill('input[name="custname"]', 'Test User');
    await page.fill('input[name="custtel"]', '123456789');
    await page.fill('input[name="custemail"]', 'test@example.com');
    
    const nameInput = page.locator('input[name="custname"]');
    await expect(nameInput).toHaveValue('Test User');
  });

  test('fast test 3 - API response check', async ({ page }) => {
    await page.goto('https://jsonplaceholder.typicode.com/posts/1');
    
    const jsonContent = page.locator('pre');
    await expect(jsonContent).toBeVisible();
    await expect(jsonContent).toContainText('userId');
  });
});