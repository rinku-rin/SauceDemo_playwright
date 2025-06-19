import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';


const loginTestData = JSON.parse(JSON.stringify(require("../data/loginTestData.json"))); 
const base_URL = 'https://www.saucedemo.com/';
let loginPage;
let productsPage;

test.beforeAll( async({page})=> {
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
})

test('Standard Login Test', async ({page}) => {
  await page.goto(base_URL);
  await loginPage.login('standard_user', 'secret_sauce');
  expect(page.url()).toBe(productsPage.URL);
})

test.describe('Data driven user login test', function() {

  for(let data of loginTestData) {

    test(`Login test for ${data.id}`, async ({ page }) => {
      await page.goto(base_URL);
      await loginPage.login(data.username, data.password);
      expect(page.url()).toBe(productsPage.URL);
    })
  }



});
