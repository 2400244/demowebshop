import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopTopMenuPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get logIn() {
    return this.page.getByRole('link', { name: 'Log in' });
  }

  get shoppingCart() {
    return this.page.getByRole('link', { name: 'Shopping cart*\n\n(*)' });
  }

  get myAccount() {
    return this.page.getByText('*@*');
  }

  get logOut() {
    return this.page.getByRole('link', { name: 'Log out' });
  }

  // ── Action / assertion methods ──
  async clickOnLoginButton(): Promise<void> {
    await this.logIn.click();
  }

  async navigateToShoppingCartInTopMenuAndClickOnShoppingCart(): Promise<void> {
    await this.shoppingCart.click();
  }

  async navigateToMyAccountByClickingOnEmailAtTopMenu(): Promise<void> {
    await this.myAccount.click();
  }

  async clickOnLogOutInTopMenuPage(): Promise<void> {
    await this.logOut.click();
  }

  async waitUntilLoggedOut(): Promise<void> {
    await expect(this.logIn).toBeVisible();
  }
}