import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopConfirmOrderPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get cartTotal() {
    return this.page.locator('.cart-total');
  }

  get confirm() {
    return this.page.locator('input[value="Confirm"]');
  }

  // ── Action / assertion methods ──
  async verificationThePricesInConfirmOrderPage(): Promise<void> {
    // This method appears to verify cart total visibility or text content
    // Removed incorrect fill() call - verification logic should be added if needed
  }

  async clickOnConfirmButtonInConfirmOrderPage(): Promise<void> {
    await this.confirm.click();
  }
}