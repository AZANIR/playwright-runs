import { test, expect } from '@playwright/test';

/**
 * Browser-specific tests for parallel execution
 * These will run on different browsers simultaneously
 */
test.describe('Cross-Browser Parallel Tests', () => {
  test('browser test 1 - user agent check', async ({ page, browserName }) => {
    await page.goto('https://httpbin.org/user-agent');
    
    const userAgentContent = page.locator('pre');
    await expect(userAgentContent).toBeVisible();
    
    // Check that user agent contains browser name
    const content = await userAgentContent.textContent();
    console.log(`Browser: ${browserName}, User-Agent: ${content}`);
    
    // Firefox has different user agent format
    if (browserName === 'firefox') {
      await expect(userAgentContent).toContainText('Firefox');
    } else if (browserName === 'chromium') {
      await expect(userAgentContent).toContainText('Chrome');
    }
  });

  test('browser test 2 - viewport handling', async ({ page, browserName }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('https://example.com');
    
    const viewport = page.viewportSize();
    expect(viewport?.width).toBe(1280);
    expect(viewport?.height).toBe(720);
    
    console.log(`Browser: ${browserName}, Viewport: ${viewport?.width}x${viewport?.height}`);
  });

  test('browser test 3 - javascript execution', async ({ page, browserName }) => {
    await page.goto('https://example.com');
    
    // Execute JavaScript and check result
    const result = await page.evaluate(() => {
      return {
        title: document.title,
        url: window.location.href,
        userAgent: navigator.userAgent
      };
    });
    
    expect(result.title).toContain('Example Domain');
    expect(result.url).toContain('example.com');
    
    console.log(`Browser: ${browserName}, JS Result:`, result);
  });
});