// module/config/selfConfigPage.js
export class SelfConfigPage {
  constructor(page) {
    this.page = page;
  }

  async openRate() {
    await this.page.getByText('Rate').click();
  }

  async openRateType() {
    await this.page.getByText('functions Rate Type').click();
  }

  async openShiftList() {
    await this.page.getByText('Shift', { exact: true }).click();
    await this.page.getByText('local_library Shift Type').click();
  }
}
