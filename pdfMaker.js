const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.type('input[name=search]', 'kochi', {delay: 20})
  await page.click('[class="sprite svg-search-icon"]')
  await page.screenshot({path: 'example.png'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});
 
  await browser.close();
})();