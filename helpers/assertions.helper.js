import { expect } from '@playwright/test';

export async function expectUrl(page, url) {
  await expect(page).toHaveURL(url);
}

export async function expectElementText(locator, expectedText) {
  await expect(locator).toHaveText(expectedText);
}
