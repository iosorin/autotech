import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join } from 'path';

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to localhost:3000
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Force a hard refresh
    await page.reload({ waitUntil: 'networkidle0' });
    
    // Create screenshots directory
    const screenshotsDir = join(process.cwd(), 'screenshots');
    await mkdir(screenshotsDir, { recursive: true });
    
    // Wait a bit for any animations
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 1. Hero section (full viewport at top)
    console.log('Capturing Hero section...');
    await page.screenshot({ 
      path: join(screenshotsDir, '01-hero.png'),
      fullPage: false
    });
    
    // Scroll and capture sections
    const sections = [
      { name: '02-event-banner', scroll: 800 },
      { name: '03-features', scroll: 1600 },
      { name: '04-account', scroll: 2400 },
      { name: '05-extra-features', scroll: 3200 },
      { name: '06-migration', scroll: 4000 },
      { name: '07-clients', scroll: 4800 },
      { name: '08-cta', scroll: 5600 },
      { name: '09-faq', scroll: 6400 },
      { name: '10-partners', scroll: 7200 },
      { name: '11-testimonials', scroll: 8000 },
      { name: '12-join', scroll: 8800 },
    ];
    
    for (const section of sections) {
      console.log(`Capturing ${section.name}...`);
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), section.scroll);
      await new Promise(resolve => setTimeout(resolve, 500));
      await page.screenshot({ 
        path: join(screenshotsDir, `${section.name}.png`),
        fullPage: false
      });
    }
    
    // Full page screenshot
    console.log('Capturing full page...');
    await page.screenshot({ 
      path: join(screenshotsDir, '00-full-page.png'),
      fullPage: true
    });
    
    console.log(`\nAll screenshots saved to: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
}

captureScreenshots();
