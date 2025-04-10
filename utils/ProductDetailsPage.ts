import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  /**
   * Click on the "Add to Basket" button within the Product Details Page.
   */
  async addToBasket(): Promise<void> {
    // Scroll the "Add to Basket" button into view and ensure it is focused
    const addToBasketButton = this.page.locator('#add-to-basket-wrapper #add-to-basket');
    await addToBasketButton.scrollIntoViewIfNeeded();
    await addToBasketButton.focus();
    await addToBasketButton.waitFor({ state: 'visible' });
    await addToBasketButton.click();
  }
}