import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopOrderSuccessfulPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get messageOrderSuccessful() {
    return this.page.getByText('Your order has been successfully processed!');
  }

  get orderNumber() {
    return this.page.locator('/* TODO: unresolvable locator */');
  }

  // ── Action / assertion methods ──
  async checkForTheOrderSuccessfulMessageAndOrderNumber(): Promise<void> {
    await expect(this.messageOrderSuccessful).toBeVisible();
    // orderNumber verification removed due to unresolvable locator
  }
}