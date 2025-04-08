import { Page } from '@playwright/test';

export class HeaderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Locator for the site header navigation.
   */
  private get siteHeaderNav() {
    return this.page.locator('.site-header-nav');
  }

  /**
   * Locator for a menu item by its text.
   */
  public getMenuItemByText(text: string) {
    return this.siteHeaderNav.locator('.group.flex', { hasText: text });
  }

  /**
   * Hover over a menu item by its text.
   */
  public async hoverOverMenuItem(text: string): Promise<void> {
    const menuItem = this.getMenuItemByText(text);
    await menuItem.waitFor({ state: 'visible' });
    await menuItem.hover();
  }
}