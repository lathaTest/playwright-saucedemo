const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceLabs Authentication Flow Validations', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
  });

  test('should allow successful login and redirect standard_user to inventory dashboard', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify application state transition and layout presentation
    await page.waitForURL('**/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(inventoryPage.appLogo).toHaveText('Swag Labs');
   // await expect(inventoryPage.inventoryContainer).toBeVisible();
  });

  test('should block locked_out_user and present explicit lock alert diagnostics notification error banner', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    // Validate constraint system behaviors and intercept layout error components
    const dynamicErrorString = await loginPage.getErrorMessageText();
    expect(dynamicErrorString).toContain('Epic sadface: Sorry, this user has been locked out.');
    await expect(loginPage.errorMessage).toBeVisible();
  });
  

});