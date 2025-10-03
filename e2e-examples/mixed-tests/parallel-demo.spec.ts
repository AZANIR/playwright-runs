import { test, expect } from '@playwright/test';

/**
 * Simple demonstration tests for parallel execution
 * These tests show how Testomatio reporter handles parallel runs
 */
test.describe('Parallel Demo Tests', () => {
  test('demo test 1 - simple page test', async ({ page }) => {
    await page.goto('data:text/html,<html><head><title>Test Page 1</title></head><body><h1>Demo Test 1</h1><p>Parallel execution test</p></body></html>');
    
    await expect(page).toHaveTitle('Test Page 1');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Demo Test 1');
    
    // Simulate some processing time
    await page.waitForTimeout(1000);
    
    console.log('Demo Test 1 completed - Worker running in parallel');
  });

  test('demo test 2 - another simple test', async ({ page }) => {
    await page.goto('data:text/html,<html><head><title>Test Page 2</title></head><body><h1>Demo Test 2</h1><p>Running simultaneously</p></body></html>');
    
    await expect(page).toHaveTitle('Test Page 2');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Demo Test 2');
    
    // Different processing time to show parallelism
    await page.waitForTimeout(2000);
    
    console.log('Demo Test 2 completed - Worker running in parallel');
  });

  test('demo test 3 - third parallel test', async ({ page }) => {
    await page.goto('data:text/html,<html><head><title>Test Page 3</title></head><body><h1>Demo Test 3</h1><p>All tests run together</p></body></html>');
    
    await expect(page).toHaveTitle('Test Page 3');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Demo Test 3');
    
    // Another different timing
    await page.waitForTimeout(1500);
    
    console.log('Demo Test 3 completed - Worker running in parallel');
  });

  test('demo test 4 - final parallel test', async ({ page }) => {
    await page.goto('data:text/html,<html><head><title>Test Page 4</title></head><body><h1>Demo Test 4</h1><p>Testomatio Reporter Test</p></body></html>');
    
    await expect(page).toHaveTitle('Test Page 4');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Demo Test 4');
    
    // Show different execution timing
    await page.waitForTimeout(500);
    
    console.log('Demo Test 4 completed - Worker running in parallel');
  });
});