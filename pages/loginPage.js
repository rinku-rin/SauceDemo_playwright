export class LoginPage {

  constructor(page){

    this.page = page;
    this.userNameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
  }

  async login(username, password) {
    await this.page.fill(this.userNameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }


}

