#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generateScreenshots() {
  console.log('🚀 Starting screenshot generation...');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const baseUrl = 'http://localhost:6006';
  
  const screenshots = [
    {
      name: 'country-select-default',
      url: `${baseUrl}/iframe.html?args=&id=components-countryselect--default`,
      viewport: { width: 400, height: 100 }
    },
    {
      name: 'country-select-selected',
      url: `${baseUrl}/iframe.html?args=&id=components-countryselect--pre-selected`,
      viewport: { width: 400, height: 100 }
    },
    {
      name: 'country-select-sizes',
      url: `${baseUrl}/iframe.html?args=&id=components-countryselect--all-sizes`,
      viewport: { width: 400, height: 300 }
    },
    {
      name: 'country-select-disabled',
      url: `${baseUrl}/iframe.html?args=&id=components-countryselect--disabled`,
      viewport: { width: 400, height: 100 }
    },
    {
      name: 'country-select-without-flags',
      url: `${baseUrl}/iframe.html?args=&id=components-countryselect--without-flags`,
      viewport: { width: 400, height: 100 }
    }
  ];

  for (const screenshot of screenshots) {
    try {
      console.log(`📸 Capturing ${screenshot.name}...`);
      
      await page.setViewportSize(screenshot.viewport);
      await page.goto(screenshot.url, { waitUntil: 'networkidle' });
      
      // Wait for component to render
      await page.waitForTimeout(2000);
      
      const outputPath = path.join(screenshotsDir, `${screenshot.name}.png`);
      await page.screenshot({ 
        path: outputPath,
        clip: { x: 0, y: 0, ...screenshot.viewport }
      });
      
      console.log(`✅ Saved ${screenshot.name}.png`);
    } catch (error) {
      console.error(`❌ Failed to capture ${screenshot.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 Screenshot generation complete!');
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
}

if (require.main === module) {
  generateScreenshots().catch(console.error);
}

module.exports = { generateScreenshots };