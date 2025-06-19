import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';


const base_URL = 'https://www.saucedemo.com/';

test('Standard Login Test', async ({page}) => {
  const loginPage = new LoginPage(page);
  
  await page.goto(base_URL);

  await loginPage.login('standard_user', 'secret_sauce');




})
