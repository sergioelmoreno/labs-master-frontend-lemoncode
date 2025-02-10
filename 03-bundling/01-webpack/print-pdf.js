import puppeteer from "puppeteer";

const date = new Date();
const __dirname = "http://localhost:3000";
const lang = process.env['PRINT_EXT'];

(async () => {

  // Launch Puppeteer and open a new page
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto(__dirname, {
    waitUntil: 'networkidle0',
  })

  await page.emulateMediaType('screen');

  // Wait for the React component to render by checking for a specific element
  await page.waitForSelector('main[data-loaded="true"]');

  // Generate PDF from the HTML content
  await page.pdf({
    path: `./pdf/CV-sergio-del-campo-puerta-${lang}-${date.getFullYear()}-${Date.parse(date)}.pdf`, // Path to save the generated PDF
    format: 'A4',       // Page size
    printBackground: true // Include background graphics
  });

  // Close the browser
  await browser.close();

})(); 