export class ProductsPage {
  constructor (page){
    this.page = page;
    this.URL = 'https://www.saucedemo.com/inventory.html';
    this.sortDropDown = "//select[@class='product_sort_container']";
    this.productNameLocator = "//div[@class='inventory_item_name ']"
  }

  async sortProductsZtoA() {
    await this.page.locator(this.sortDropDown).selectOption({ value: "za" });
  }

  async sortProductsAtoZ() {
    await this.page.locator(this.sortDropDown).selectOption({ value: "az" });
  }

  //Sorted by price low to high
  async sortProductsByPriceAsc() {
    await this.page.locator(this.sortDropDown).selectOption({ value: "lohi" });
  }

  //Sorted by price high to low
  async sortProductsByPriceDesc() {
    await this.page.locator(this.sortDropDown).selectOption({ value: "hilo" });
  }


  async getAllProductNamesOnPage() {
    return await this.page.locator(this.productNameLocator).allInnerTexts();
  }



}






