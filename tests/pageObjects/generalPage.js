class GeneralPage {
  /**
   * @param {import('playwright').Page} page 
   */
  constructor(page) {
    this.page = page;
      }
  async openURL(link) {
      await this.page.goto(link);
      await this.page.waitForLoadState('load');
    }

    async findElement(element) {
       return await this.page.locator(element);
    }

    async clickElement(element) {
        await (await this.findElement(element)).click();
    }


    async setValue(element, text) {
         await (await this.findElement(element)).fill(text);
    }

    // async randomValueGenerator(number = 7) {
    // let chars = "abcdefghijklmnopqrstuvwxyz";
    // let string = "";
    // for (var ii = 0; ii < number; ii++) {
    //   string += chars[Math.floor(Math.random() * chars.length)];
    // }
    // return string;
    // }

    // async getText(locator) {
    //     return await this.page.innerText(locator);
    // }

    
    

}
module.exports = { GeneralPage };