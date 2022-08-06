const { GeneralPage } = require('./generalPage');

class MainPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    
    async openRedmine() {
        await super.openURL('https://www.redmine.org/')
    }

}
module.exports = { MainPage };