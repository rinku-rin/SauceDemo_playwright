import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { SideBarMenu } from '../pages/sideBarMenu';


const validLoginTD = JSON.parse(JSON.stringify(require("../data/validLoginTestData.json"))); 
const invalidLoginTD = JSON.parse(JSON.stringify(require("../data/invalidLoginTestData.json")));
const base_URL = 'https://www.saucedemo.com/';
let page;
let loginPage;
let productsPage;
let sideBarMenu;

test.beforeEach( async({page})=> {
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  sideBarMenu = new SideBarMenu(page);
})

test('Standard Login Test', async ({page}) => {
  await page.goto(base_URL);
  await loginPage.login('standard_user', 'secret_sauce');
  expect(page.url()).toBe(productsPage.URL);
});

test.describe('DDT valid user login test', function() {
  for (let data of validLoginTD) {
    test(`Login test for ${data.id}`, async ({ page }) => {
      await page.goto(base_URL);
      await loginPage.login(data.username, data.password);
      expect(page.url()).toBe(productsPage.URL);
    })
  }
});

test.describe('DDT invalid user login test', function () {
  for (let data of invalidLoginTD) {
    test(`Login test for ${data.id}`, async ({ page }) => {
      await page.goto(base_URL);
      await loginPage.login(data.username, data.password);
      expect(page.locator("//h3[@data-test='error']")).toBeVisible();
    })
  }
});



test("Logout successfully", async ({page}) => {

  await page.goto(base_URL);
  await loginPage.login('standard_user', 'secret_sauce');
  expect(page.url()).toBe(productsPage.URL);

  await sideBarMenu.logout();
  expect(page.url()).toBe(base_URL);
})


test.afterEach( async ({page}) => {
  await page.waitForTimeout(3000);
  page.close();
})


