import { test, expect } from '@playwright/test';
import { BASE_URL, USERS } from '../data/users.data';
import { LoginPage } from '../pages/login.page';

test('Positive login – standard user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(
    USERS.standard_user.username,
    USERS.standard_user.password
  );

  await expect(page).toHaveURL(`${BASE_URL}inventory.html`);
  await expect(page.locator('.title')).toHaveText('Products');
});
