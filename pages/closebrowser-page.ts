import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ClosebrowserPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get title() {
    return this.page.locator('/* TODO: no locator */');
  }

  // ── Action / assertion methods ──
  async closeWebShop(): Promise<void> {
    await this.page.close();
  }
}