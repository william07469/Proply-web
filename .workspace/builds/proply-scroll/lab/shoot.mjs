import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = 'C:\\Users\\Gaming\\Desktop\\Proply Web\\.workspace\\builds\\proply-scroll';
const LAB = join(BUILD, 'lab');
mkdirSync(LAB, { recursive: true });

const browser = await chromium.launch({ executablePath: 'C:\\Users\\Gaming\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4500', { waitUntil: 'networkidle' });

// 1: Opening
await page.waitForTimeout(1500);
await page.screenshot({ path: join(LAB, '01-darkness.png') });
console.log('01 done');

// 2: Scroll 25%
const total = await page.evaluate(() => document.body.scrollHeight);
await page.evaluate((t) => window.scrollTo(0, t * 0.25), total);
await page.waitForTimeout(800);
await page.screenshot({ path: join(LAB, '02-approach.png') });
console.log('02 done');

// 3: Scroll 45%
await page.evaluate((t) => window.scrollTo(0, t * 0.45), total);
await page.waitForTimeout(800);
await page.screenshot({ path: join(LAB, '03-laptop.png') });
console.log('03 done');

// 4: Scroll 65%
await page.evaluate((t) => window.scrollTo(0, t * 0.65), total);
await page.waitForTimeout(800);
await page.screenshot({ path: join(LAB, '04-sync.png') });
console.log('04 done');

// 5: Scroll 90%
await page.evaluate((t) => window.scrollTo(0, t * 0.9), total);
await page.waitForTimeout(800);
await page.screenshot({ path: join(LAB, '05-close.png') });
console.log('05 done');

await browser.close();
console.log('All 5 screenshots saved to lab/');
