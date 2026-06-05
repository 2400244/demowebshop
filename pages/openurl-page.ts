import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class OpenurlPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get url() {
    return this.page.locator('/* TODO: no locator */');
  }

  // ── Action / assertion methods ──
  async openurl(url: string): Promise<void> {
    await this.page.goto(url);
  }
}