// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 30 * 1000,
  retries: 1,
  expect: {
    
    timeout: 5000
  },
  
  projects: [
    {
      name: "webkit",
      use: {
    
        browserName: 'webkit',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on',
        ...devices ["iPad Pro 11 landscape"]
      }

    },
    {
      name: "chrome",
      use: {
    
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        permissions: ["geolocation"],
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        // launchOptions: {
        //   // 1
        //   args: ["--start-maximized"],
        // },
        viewport: {width:720, height:720}
        // ...devices ["Desktop Chrome"]
      }

    }

  ]
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
    
});

