// module/dashboard/dashboardPage.js
export class DashboardPage {
  constructor(page) {
        this.page = page; // <-- Missing in your code

    this.search = page.getByRole('searchbox', { name: 'Search..' });
  }

  async openProgram(programName) {
    await this.search.fill(programName);
    await this.page.locator('#listingwrapper').getByText('CodeNova Program').click();
    
  }

  async openDashboard() {
    await this.page.getByRole('button', { name: 'dashboard Navigate to' }).click();
    await this.page.getByRole('link', { name: ' Dashboard' }).click();
  }

  async openSelfConfig() {
    await this.page.getByRole('link', { name: ' Self Configuration' }).click();
  }
}
