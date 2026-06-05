import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopMyAccountNavigationPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get myAccountMenu() {
    return this.page.getByText('My account

    

    

        

            

                Customer info

                            Addresses

                            Orders

                                        Downloadable products

                            Back in stock subscriptions

                            Reward points

                            Change password');
  }

  // ── Action / assertion methods ──
  async clickOnOrdersTabInMyAccountNavigationPage(): Promise<void> {
    await this.page.getByRole('link', { name: 'Orders' }).click();
  }
}