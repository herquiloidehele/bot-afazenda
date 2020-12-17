const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  await page.goto('https://afazenda.r7.com/a-fazenda-12/votacao');

  let votos = 0

  setInterval(async () => {
    try {
      await page.click('[data-id="759"]');
      await page.click('.voting-button');

      await page.evaluate(() => {
        let teste = document.querySelector('.voting-modal__close')
        console.log( teste )
        $(teste).click()
      })

      votos++
      console.log(`Você votou: ${votos} vezes`);

    } catch( err) {
      console.error('ERROR => ', err);
    }

  },1500)
})();