const { test, expect } = require('@playwright/test');
const { BASE_URL, USERS } = require('../data/users.data'); 
const { LoginPage } = require('../pages/login.page'); 
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('SANITY – full purchase flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(USERS.standard_user.username, USERS.standard_user.password);
  
  await expect(page).toHaveURL(`${BASE_URL}inventory.html`);
  await expect(page.locator('.title')).toHaveText('Products');

  await inventory.addItemsToCart(2);
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  await inventory.goToCart();

  await expect(page).toHaveURL(`${BASE_URL}cart.html`);
  await expect(page.locator('.title')).toHaveText('Your Cart');
  
  const cartCount = await cart.getItemsCount();
  expect(cartCount).toBe(2);
  await cart.proceedToCheckout();

  await expect(page).toHaveURL(`${BASE_URL}checkout-step-one.html`);
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  await checkout.fillInfo('Ziv', 'Rubinstein', '12345');

  await expect(page).toHaveURL(`${BASE_URL}checkout-step-two.html`);
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  await checkout.finishCheckout();

  await expect(page).toHaveURL(`${BASE_URL}checkout-complete.html`);
  await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
  
  const thankYou = await checkout.getThankYouText();
  expect(thankYou).toContain('Thank you for your order!');
});