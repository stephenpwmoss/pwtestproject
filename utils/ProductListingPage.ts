import { BasePage } from './BasePage';

export class ProductListingPage extends BasePage {
  /**
   * Select a product from the Product Listing Page by its index.
   * @param index The index of the product to select (0-based).
   */
  async selectProductByIndex(index: number): Promise<string> {
    const productLocator = this.page.locator('[data-e2e^="search_list-item-"]').nth(index);
    const productText = await productLocator.innerText();
    await productLocator.click();
    return productText;
  }
}