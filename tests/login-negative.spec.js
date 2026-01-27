import { test, expect } from '@playwright/test';
import { BASE_URL, INVALID } from '../data/users.data';
import { LoginPage } from '../pages/login.page';

Object.entries(INVALID).forEach(([key, scenario]) => {
  test(`Negative login – ${key}`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await login.login(scenario.username, scenario.password);

    await expect(page).toHaveURL(BASE_URL);
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(scenario.error);
  });
});
