import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { addMonths, format } from 'date-fns';

export async function logInScenario(
  page: Page,
  params: { URL: string; Email: string; Password: string }
): Promise<void> {
  await page.goto(params.URL);
  await page.waitForLoadState('networkidle');
  
  await page.waitForTimeout(15000);
  
  await expect(page.locator('/* TODO: no locator */')).toBeVisible();
  
  await page.locator('/* TODO: no locator */').click();
  
  await page.locator('/* TODO: no locator */').fill(params.Email);
  
  await page.locator('/* TODO: no locator */').fill(params.Password);
  
  await page.locator('/* TODO: no locator */').click();
  await page.waitForLoadState('networkidle');
}

export async function orderProduct(
  page: Page,
  params: { ProductLinkName: string; Quantity: string }
): Promise<void> {
  await page.locator('/* TODO: no locator */').fill(params.ProductLinkName);
  
  await page.locator('/* TODO: no locator */').click();
  
  await page.waitForLoadState('networkidle');
  
  await page.locator('/* TODO: no locator */').fill(params.Quantity);
  
  await page.locator('/* TODO: no locator */').click();
}

export async function checkoutProcess(
  page: Page,
  params: { ShippingMethod: string; PaymentMethod: string }
): Promise<void> {
  await page.locator('/* TODO: no locator */').click();
  
  await page.locator('/* TODO: no locator */').click();
  
  await page.locator('/* TODO: no locator */').fill(params.ShippingMethod);
  
  await page.locator('/* TODO: no locator */').click();
  
  await page.locator('/* TODO: no locator */').fill(params.PaymentMethod);
  
  await page.locator('/* TODO: no locator */').click();
  
  await page.locator('/* TODO: no locator */').selectOption('Visa');
  
  await page.locator('/* TODO: no locator */').fill(faker.string.alpha(10));
  
  await page.locator('/* TODO: no locator */').fill('4485564059489345');
  
  await page.locator('/* TODO: no locator */').fill(format(addMonths(new Date(), 4), 'MM'));
  
  await page.locator('/* TODO: no locator */').fill(format(addMonths(new Date(), 0), 'yyyy'));
  
  await page.locator('/* TODO: no locator */').fill(String(faker.number.int({ min: 100, max: 999 })));
  
  await page.locator('/* TODO: no locator */').click();
}

export async function confirmation(page: Page): Promise<void> {
  await page.locator('/* TODO: no locator */').click();
  await page.waitForLoadState('networkidle');
}