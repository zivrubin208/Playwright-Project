const { test, expect } = require('@playwright/test');
const { BASE_URL, USERS } = require('../data/users.data'); 
const { LoginPage } = require('../pages/login.page'); 

test('Positive login – standard user', async ({ page }) => {
  const login = new LoginPage(page);
  
  await login.goto();
  await login.login(USERS.standard_user.username, USERS.standard_user.password);
  
  await expect(page).toHaveURL(`${BASE_URL}inventory.html`);
  await expect(page.locator('.title')).toHaveText('Products');
});