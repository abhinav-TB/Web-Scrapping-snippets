const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/', {delay: 20});

  await page.waitForSelector('#manage-trips', { visible: true, timeout: 0 });
  await page.click('[class="dIyEr"]')
  
 
  await browser.close();
})();