import { test, expect } from '@playwright/test';
import { BASE_URL, USERS } from '../data/users.data';
import { LoginPage } from '../pages/login.page';

const POSITIVE_USERS = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
];

POSITIVE_USERS.forEach((userKey) => {
  test(`Positive login – ${userKey}`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(
      USERS[userKey].username,
      USERS[userKey].password
    );

    await expect(page).toHaveURL(`${BASE_URL}inventory.html`);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});
