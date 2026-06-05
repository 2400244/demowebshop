import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopOrderDetailsPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get orderNumber() {
    return this.page.locator('/* TODO: unresolvable locator */');
  }

  // ── Action / assertion methods ──
  async checkTheOrderDetails(): Promise<void> {
    await this.orderNumber.fill("Order Number: '' /* TODO: Buffer var 'OrderNumber' referenced before capture */*");
  }
}