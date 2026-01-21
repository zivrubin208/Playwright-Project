export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button[id^="add-to-cart"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addItemsToCart(count = 2) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
