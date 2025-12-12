// module/dashboard/dashboardPage.js
import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
        this.page = page; // <-- Missing in your code

    this.search = page.getByRole('searchbox', { name: 'Search..' });
  }

  // async openProgram(programName) {
  //   await this.search.fill(programName);
  //   await this.page.locator('#listingwrapper').getByText('CodeNova Program').click();
    
  // }
  async openProgram(programName) {
  await this.search.click();
  await this.search.fill('');
  await this.search.type(programName);
  await this.search.press('Enter');

  const program = this.page
    .locator('tr', { hasText: programName })
    .locator('p', { hasText: programName })
    .first();

  await program.scrollIntoViewIfNeeded();
  await expect(program).toBeVisible();
  await program.click();
}


  async openDashboard() {
    await this.page.getByRole('button', { name: 'dashboard Navigate to' }).click();
    await this.page.getByRole('link', { name: ' Dashboard' }).click();
  }

  async openSelfConfig() {
    await this.page.getByRole('link', { name: ' Self Configuration' }).click();
  }
}
