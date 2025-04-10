import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  /**
   * Accept cookies from the onetrust banner.
   */
  async acceptCookies(): Promise<void> {
    const acceptCookiesButton = this.page.getByRole('button', { name: "That's Ok" });
    await acceptCookiesButton.waitFor({ state: 'visible', timeout: 30000 }); // Wait for the button to be visible
    await acceptCookiesButton.click();
  }

  /**
   * Close the member subscription dialog box.
   */
  async closeMemberSubscriptionDialog(): Promise<void> {
    const dialogContent = this.page.locator('#ltkpopup-content');
    await dialogContent.waitFor({ state: 'visible', timeout: 30000 }); // Wait for the dialog to be visible
    const closeButton = this.page.locator('#ltkpopup-close-button button[aria-label="close"]');
    await closeButton.waitFor({ state: 'visible', timeout: 30000 }); // Wait for the close button to be visible
    await closeButton.click(); // Click the close button
  }

  /**
   * Hover over the "Skin Care" menu item.
   */
  async hoverOverSkinCareMenu(): Promise<void> {
    await this.waitForElement('text=" Skin Care "');
    await this.page.hover('text=" Skin Care "');
  }

  /**
   * Select the "Moisturisers & Serums" sub-menu item.
   */
  async selectSerumsSubMenu(): Promise<void> {
    await this.waitForElement('text=" Moisturisers & Serums "');
    await this.page.hover('text=" Moisturisers & Serums "');
    await this.page.click('text=" Moisturisers & Serums "');
  }
}