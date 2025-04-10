import { test, expect } from '@playwright/test';
import { HomePage } from '../utils/HomePage';
import { ProductDetailsPage } from '../utils/ProductDetailsPage';
import { ProductListingPage } from '../utils/ProductListingPage';
import { PopupsAndModalsPage } from '../utils/PopupsAndModalsPage';
import { Helper } from '../utils/BasePage';

test('Add Single Item Product to Basket', async ({ page }) => {
  // Initialize the HomePage object
  const homePage = new HomePage(page);

  // Navigate to the base URL
  await homePage.navigateTo(Helper.getBaseURL());

  // Accept cookies from the onetrust banner
  await homePage.acceptCookies();

  await homePage.closeMemberSubscriptionDialog();

  // Hover over the "Skin Care" menu item
  await homePage.hoverOverSkinCareMenu();

  // Select the "Moisturisers & Serums" sub-menu item
  await homePage.selectSerumsSubMenu();

  // Initialize the ProductListingPage object
  const productListingPage = new ProductListingPage(page);

  // Select the 3rd product from the Product Listing Page
  const selectedProduct = await productListingPage.selectProductByIndex(2);

  // Wait for the product details page to load
  await page.waitForLoadState('load');

  // Verify the product details section is present
  await page.waitForSelector('#product-details', { state: 'visible' });

  // Initialize the ProductDetailsPage object
  const productDetailsPage = new ProductDetailsPage(page);

  // Click on add to basket within the Product Details Page
  await productDetailsPage.addToBasket();

  // Initialize the PopupsAndModalsPage object
  const popupsAndModalsPage = new PopupsAndModalsPage(page);

  // Close the "Added to Your Basket" modal
  await popupsAndModalsPage.closeAddedToBasketModal();

  // Wait for the basket count to appear before verifying it
  await expect(page.locator('#basket-count')).toHaveText('1');
});