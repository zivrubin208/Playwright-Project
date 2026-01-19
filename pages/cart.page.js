export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async getItemsCount() {
    const items = this.page.locator(this.cartItems);
    const count = await items.count();
    return count;
  }

  async proceedToCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }
}