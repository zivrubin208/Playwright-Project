const { expect } = require('@playwright/test');

async function expectUrl(page, url) {
  await expect(page).toHaveURL(url);
}

async function expectElementText(locator, expectedText) {
  await expect(locator).toHaveText(expectedText);
}

module.exports = {
  expectUrl,
  expectElementText
};