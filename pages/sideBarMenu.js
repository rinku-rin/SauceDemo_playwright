export class SideBarMenu {

  constructor(page) {
    this.page = page;
    this.menuButton = '#react-burger-menu-btn';
    this.allItemsMenuOption = "//a[@id ='inventory_sidebar_link']";
    this.aboutMenuOption = "//a[@id ='about_sidebar_link']";
    this.logoutMenuOption =  "//a[@id ='logout_sidebar_link']";
    this.resetMenuOption = "//a[@id ='reset_sidebar_link']";
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutMenuOption);
  }



}