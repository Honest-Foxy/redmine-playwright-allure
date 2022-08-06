const { GeneralPage } = require('./generalPage');

const loginInput = '#username';
const passwordInput = '#password';
const loginButton = '[type="submit"]';
const redPopUp = '#flash_error';

class LoginPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }

    async addLogin(login) {
        await super.setValue(loginInput, login);
}
    async addPassword(password) {
        await super.setValue(passwordInput, password);
    }
    
    async clickLoginButton() {
        await super.clickElement(loginButton);
    }
    async getRedPopUp() {
        return await super.findElement(redPopUp);
    }
   

}
module.exports = { LoginPage };