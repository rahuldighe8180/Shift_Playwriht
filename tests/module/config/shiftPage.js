// module/config/shiftPage.js
export class ShiftPage {
  constructor(page) {
    this.page = page;
    this.createBtn = page.getByRole('button', { name: 'add Create New' });
    this.title = page.getByRole('textbox', { name: 'Please fill out this field' });
    this.radioDuration = page.getByRole('radio', { name: 'Duration' });
    this.durationInput = page.getByPlaceholder('Enter a HH:MM Time Duration');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async createShift(name, duration) {
    await this.createBtn.click();
    await this.title.fill(name);

    await this.radioDuration.check();
    await this.durationInput.fill(duration);

    await this.saveBtn.click();
  }
}
