# SauceLabs Playwright POM Automation Framework

A production-ready Page Object Model (POM) UI automation test suite using Playwright and JavaScript to evaluate access patterns for standard and locked out user states.

## Prerequisite Environments
Ensure your machine has [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

## Framework Installation Setup Steps

1. **Clone or structure the framework workspace files locally:**
   ```bash
   mkdir saucelabs-automation && cd saucelabs-automation
   npm install
   npx playwright install chromium

2. **To run tests locally**
   ```bash
   npm run test
   npm run test:headed

3.  **To run the html test report**
   ```bash
   npm run test:report
