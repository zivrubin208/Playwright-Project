export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.thankYouHeader = '.complete-header';
  }

  async fillFirstName(firstName) {
    await this.page.locator(this.firstNameInput).fill(firstName);
  }

  async fillLastName(lastName) {
    await this.page.locator(this.lastNameInput).fill(lastName);
  }

  async fillPostalCode(postalCode) {
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

  async clickFinish() {
    await this.page.locator(this.finishButton).click();
  }

  async getThankYouMessage() {
 
    return await this.page.locator(this.thankYouHeader).textContent();
  }
}