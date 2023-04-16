const puppeteer = require('puppeteer');//fits our development env

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //go to react website
  await page.goto('http://localhost:3000');

  // Set screen size
  await page.setViewport({width: 720, height: 480});

  //Take screenshot
  await page.screenshot({
    path: "s1.jpg",
    type: "jpeg"
  });

  // Wait and click on list
  const searchResultSelector = "a[href='/List']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  //Take screenshot
  await page.screenshot({
    path: "s2.jpg",
    type: "jpeg"
  });


  // Type into input
  await page.type('input', 'Puppeter was here!');

  //Take screenshot
  await page.screenshot({
    path: "s3.jpg",
    type: "jpeg"
  });

  await browser.close();
})();