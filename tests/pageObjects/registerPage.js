const { GeneralPage } = require('./generalPage');

const loginInput = '[id="user_login"]';
const passwordInput = '#user_password';
const confirmationInput = '#user_password_confirmation';
const firstNameInput = '#user_firstname';
const lastNameInput = '#user_lastname';
const emailInput = '#user_mail';
const submitButton = '[type="submit"]';
const greenPopUp = '#flash_notice';
const redExplanationPopUp = '[id="errorExplanation"]>ul';

class RegisterPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    async addLogin(login) {
        await super.setValue(loginInput,
            login);
}
    async addPassword(password) {
        await super.setValue(passwordInput, password);
    }
    async addConfirmation(password) {
        await super.setValue(confirmationInput, password);
    }
    async addFirstName(firstName) {
        await super.setValue(firstNameInput, firstName);
    }
    async addLastName(lastName) {
        await super.setValue(lastNameInput, lastName);
    }
    async addEmail(email) {
        await super.setValue(emailInput, email);
    }

    async clickSubmitButton() {
        await super.clickElement(submitButton);
    }

    async getRedExplanationPopUp() {
        return await super.findElement(redExplanationPopUp);
    }
    
     async getRedExplanationPopUpText() {
         return await this.page.innerText(redExplanationPopUp);
    }

    async getGreenPopUp() {
        return await super.findElement(greenPopUp);
    }
 

}
module.exports = { RegisterPage };