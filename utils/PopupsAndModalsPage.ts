import { BasePage } from './BasePage';

export class PopupsAndModalsPage extends BasePage {
  /**
   * Close the "Added to Your Basket" modal.
   */
  async closeAddedToBasketModal(): Promise<void> {
    const modalCloseButton = this.page.locator('#basket-modal .modal-box .closeBtn[aria-label="Close modal"]');
    await modalCloseButton.waitFor({ state: 'visible', timeout: 30000 });
    await modalCloseButton.click();
  }
}