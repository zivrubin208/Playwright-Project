import { expect } from '@playwright/test';

export async function expectUrl(page, url) {
  await expect(page).toHaveURL(url);
}

export async function expectTitle(page, text) {
  await expect(page.locator('.title')).toHaveText(text);
}
