// module/login/loginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole('textbox', { name: 'Enter Your Email Address Or' });
    this.password = page.getByRole('textbox', { name: 'Enter Your Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In', exact: true });
  }

  async goto() {
    await this.page.goto('https://qa-account.simplifysandbox.net/');
  }

  async login(email, pass) {
    await this.email.fill(email);
    await this.password.fill(pass);
    await this.signInBtn.click();
  }
}
