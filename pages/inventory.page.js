export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = '.inventory_item';
    this.addToCartButtons = 'button[id^="add-to-cart"]';
    this.cartLink = '.shopping_cart_link';
  }

  async addItemsToCart(count = 2) {
    const buttons = await this.page.$$(this.addToCartButtons);
    for (let i = 0; i < count; i++) {
      await buttons[i].click();
    }
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
