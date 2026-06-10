class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('#inventory_container');
    this.appLogo = page.locator('.app_logo');
  }

  async isLoaded() {
    await this.page.waitForURL('**/inventory.html');
    return await this.inventoryContainer.isDisplayed();
  }
}

module.exports = { InventoryPage };