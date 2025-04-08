import { test, expect } from '@playwright/test';

test('Add Single Item Product to Basket', async ({ page }) => {
  const baseURL = process.env.BASE_URL || 'https://www.cultbeauty.com/';

  // Navigate to the base URL
  await page.goto(baseURL);

  // Accept cookies from the onetrust banner
  const acceptCookiesButton = await page.getByRole('button', { name: "That's Ok" });
  if (acceptCookiesButton) {
    await acceptCookiesButton.click();
  }

 // Wait for the Member Subscribe dialog to appear and close it
 const dialogContent = page.locator('#ltkpopup-content');
 await dialogContent.waitFor({ state: 'visible', timeout: 30000 }); // Explicitly wait for the dialog to be visible
 const closeButton = page.locator('#ltkpopup-close-button button[aria-label="close"]');
 await closeButton.waitFor({ state: 'visible', timeout: 30000 }); // Explicitly wait for the close button to be visible
 await closeButton.click(); // Click the close button


  // Wait for the " Skin Care " menu item to be visible and Hover over it
  await page.waitForSelector('text=" Skin Care "', { state: 'visible' });
  await page.hover('text=" Skin Care "');


// Hover and Select the Moisturisers & Serums sub-menu item
  await page.waitForSelector('text=" Moisturisers & Serums "', { state: 'visible' });
  await page.hover('text=" Moisturisers & Serums "');
  await page.click('text=" Moisturisers & Serums "');

 
  // Select the 3rd product from the Product Listing Page which is an nth selector within the search_list-item-
  await page.locator('[data-e2e^="search_list-item-"]').nth(2).click();

  // This ensures that the page is fully loaded before proceeding
  await page.waitForLoadState('load');

  // Verify the product details section is present
  await page.waitForSelector('#product-details', { state: 'visible' });

  // Click on add to basket within the Product Details Page (with no variant selection)
  const addToBasketButton = page.getByRole('button', { name: 'Add product to basket' });
  await addToBasketButton.scrollIntoViewIfNeeded();
  await addToBasketButton.waitFor({ state: 'visible' });
  await addToBasketButton.click();

// Wait for the Member Subscribe dialog to appear and close it
  // Wait for the modal to appear and close it
  const modalCloseButton = page.locator('#basket-modal .modal-box .closeBtn[aria-label="Close modal"]');
  await modalCloseButton.waitFor({ state: 'visible', timeout: 30000 });
  await modalCloseButton.click();


  // Wait for the basket count to appear before verifying it
  await expect(page.locator('#basket-count')).toHaveText('1');


});