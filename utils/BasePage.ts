import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specified URL.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Wait for an element to be visible.
   */
  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  /**
   * Click an element by its selector.
   */
  async clickElement(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  /**
   * Close a modal by its selector.
   */
  async closeModal(modalSelector: string, closeButtonSelector: string): Promise<void> {
    const modal = this.page.locator(modalSelector);
    await modal.waitFor({ state: 'visible' });
    await this.page.locator(closeButtonSelector).click();
  }
}

export class Helper {
  /**
   * Get the base URL for the application.
   */
  static getBaseURL(): string {
    return process.env.BASE_URL || 'https://www.cultbeauty.com/';
  }
}