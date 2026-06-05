import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopMyAccountNavigationPage extends BasePage {
  readonly page: Page;
  readonly ordersLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.ordersLink = page.locator('a:has-text("Orders")');
  }

  async clickOrders() {
    await this.ordersLink.click();
  }
}
