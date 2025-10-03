import { test } from '@playwright/test';

/**
 * Setup for Clinic project - similar to client's setup-ecl
 * This runs before clinic-api tests
 */
test('Setup for Clinic project', async ({ page }) => {
  console.log('🏥 [SETUP: CLINIC] Setting up Clinic API environment...');
  console.log('🔧 [SETUP: CLINIC] Initializing E-Clinic ECL system...');
  
  // Simulate login/setup for Clinic
  await page.goto('data:text/html,<html><body><h1>Clinic API Setup</h1></body></html>');
  
  // Simulate authentication setup
  await page.waitForTimeout(700);
  
  console.log('✅ [SETUP: CLINIC] Clinic API setup completed'); 
  console.log('🌐 [SETUP: CLINIC] Logging in for ECL with baseURL: |https://ecl_b.test4.e-clinic.local|');
  console.log('🔑 [SETUP: CLINIC] Clinic authentication established');
});