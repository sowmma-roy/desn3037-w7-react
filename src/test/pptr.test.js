import puppeteer from "puppeteer";
jest.setTimeout(100000);

test("Input field contains hello world", async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    //go to react website
    await page.goto('http://localhost:3000');
  
    // Set screen size
    await page.setViewport({width: 720, height: 480});
    
    // Wait and click on list
    const searchResultSelector = "a[href='/List']";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
  
    // Type into input
    await page.type('input', 'hello world');


    const content = await page.content();  
    await browser.close();

    expect(content).toContain("hello world");


})

