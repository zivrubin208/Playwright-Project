const { test, expect } = require('@playwright/test');
const { BASE_URL, USERS } = require('../data/users.data'); 
const { LoginPage } = require('../pages/login.page'); 
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

const { expectElementText, expectUrl } = require('../helpers/assertions.helper');

test('SANITY – full purchase flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(USERS.standard_user.username, USERS.standard_user.password);
  
  
  await expectUrl(page, `${BASE_URL}inventory.html`);
  
  await expectElementText(page.locator('.title'), 'Products');

  await inventory.addItemsToCart(2);
  await expectElementText(page.locator('.shopping_cart_badge'), '2');
  await inventory.goToCart();

  await expectUrl(page, `${BASE_URL}cart.html`);
  await expectElementText(page.locator('.title'), 'Your Cart');
  
  const cartCount = await cart.getItemsCount();
  expect(cartCount).toBe(2);
  await cart.proceedToCheckout();

  await expectUrl(page, `${BASE_URL}checkout-step-one.html`);
  await expectElementText(page.locator('.title'), 'Checkout: Your Information');
  
  await checkout.fillFirstName('Ziv');
  await checkout.fillLastName('Rubin');
  await checkout.fillPostalCode('12345');
  await checkout.clickContinue();

  await expectUrl(page, `${BASE_URL}checkout-step-two.html`);
  await expectElementText(page.locator('.title'), 'Checkout: Overview');
  await checkout.clickFinish(); 

  await expectUrl(page, `${BASE_URL}checkout-complete.html`);
  await expectElementText(page.locator('.title'), 'Checkout: Complete!');
  
  const thankYou = await checkout.getThankYouMessage();
  expect(thankYou).toContain('Thank you for your order!');
});