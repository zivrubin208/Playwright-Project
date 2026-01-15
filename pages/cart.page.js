export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async getItemsCount() {
    return (await this.page.$$(this.cartItems)).length;
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
