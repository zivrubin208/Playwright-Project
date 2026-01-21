import { test, expect } from '@playwright/test';
import { INVALID } from '../data/users.data';
import { LoginPage } from '../pages/login.page';

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
