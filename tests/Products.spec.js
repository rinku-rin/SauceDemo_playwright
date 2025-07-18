import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';


let loginPage;
let productsPage;




test.beforeEach('login before all tests', async ({page}) =>{

  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
})





test('Sort items in reverse alphabetical order', async ({page})=> {
  await productsPage.sortProductsZtoA();
  let productList = await productsPage.getAllProductNamesOnPage();
  let correctOrder = await productsPage.getAllProductNamesOnPage();
  const failedMessage = `Products are not in reverse alphabetical order`;

  correctOrder.sort().reverse();
  productList.forEach((product, index) => {
    expect(product === correctOrder[index], failedMessage).toBeTruthy();
  })
})


test('Sort items in alphabetical order', async ({ page }) => {
  await productsPage.sortProductsAtoZ();

  let productList = await productsPage.getAllProductNamesOnPage();
  let correctOrder = await productsPage.getAllProductNamesOnPage();
  const failedMessage = `Products are not in alphabetical order`;

  correctOrder.sort();
  productList.forEach((product, index) => {
    expect(product === correctOrder[index], failedMessage).toBeTruthy();
  })
})



test.afterEach('close browser', async ({page})=> {
  await page.waitForTimeout(3000);
  page.close();
})