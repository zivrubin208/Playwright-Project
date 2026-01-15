const { test, expect } = require('@playwright/test');
const { INVALID } = require('../data/users.data'); 
const { LoginPage } = require('../pages/login.page'); 


Object.entries(INVALID).forEach(([key, scenario]) => {
  test(`Negative login – ${key}`, async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(scenario.username, scenario.password);
    
    const errorLocator = page.locator('[data-test="error"]');
    await expect(errorLocator).toBeVisible();
    
    await expect(errorLocator).toContainText(scenario.error);
  });
});