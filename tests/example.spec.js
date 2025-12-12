 import { test, expect } from '@playwright/test';
 test.use({
  viewport: { width: 1200, height: 600 },
  launchOptions: { slowMo: 700 }
});
 
test.setTimeout(100000);

test('test', async ({ page }) => {
  
  await page.goto('https://qa-account.simplifysandbox.net/');
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).fill('admin');
  await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('Admin@Simplify');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search..' }).click();
  await page.getByRole('searchbox', { name: 'Search..' }).fill('codeNova');
  await page.locator('#listingwrapper').getByText('CodeNova Program').click();
  await page.getByRole('button', { name: 'dashboard Navigate to' }).click();
  await page.getByRole('link', { name: ' Dashboard' }).click();
  await page.getByRole('link', { name: ' Self Configuration' }).click();
  await page.getByText('Rate').click();
  await page.getByText('functions Rate Type').click();
  await page.getByText('Rate Type 3 Recordsadd Create').click();
  await page.locator('.table-outer').click();
  await page.getByText('Shift', { exact: true }).click();
  await page.getByText('local_library Shift Type').click();
  await page.locator('div').filter({ hasText: 'En-US apps SA' }).nth(4).click();
  await page.getByRole('button', { name: 'add Create New' }).click();
  await page.getByRole('textbox', { name: 'Please fill out this field' }).click();
  await page.getByRole('textbox', { name: 'Please fill out this field' }).fill('Baap it');
  await page.locator('.form-check-inline > .d-flex').first().click();
  await page.getByRole('radio', { name: 'Duration' }).check();
  await page.getByPlaceholder('Enter a HH:MM Time Duration').click();
  await page.getByPlaceholder('Enter a HH:MM Time Duration').fill('10:30');
  await setTimeout(() => {}, 3000);
  await page.getByRole('button', { name: 'Save' }).click();
});