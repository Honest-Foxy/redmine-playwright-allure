const { test, expect } = require('@playwright/test');
const { Header } = require('../pageObjects/header');
const { MainPage } = require('../pageObjects/mainPage');
const { RegisterPage } = require('../pageObjects/registerPage');
const randomstring = require("randomstring");
const { LoginPage } = require('../pageObjects/loginPage');
const login = randomstring.generate(7);
const password = randomstring.generate(4);
const firstName = randomstring.generate(6);
const lastName = randomstring.generate(8);
const email = `${randomstring.generate(7)}@gmail.com`;
const invalidLogin = 'HonestTesting';
const invalidPassword = randomstring.generate(1);
const staticPassword = 'test';
const invalidEmail = randomstring.generate(6);


test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    
  await mainPage.openRedmine();
});

test.describe('Smoke testing Redmine', async () => {
    test('Should check registration with valid data', async ({ page }) => {
        const header = new Header(page);
        const registerPage =  new RegisterPage(page);
        await header.clickRegisterButton();
        await registerPage.addLogin(login);
        await registerPage.addPassword(password);
        await registerPage.addConfirmation(password);
        await registerPage.addFirstName(firstName);
        await registerPage.addLastName(lastName);
        await registerPage.addEmail(email);
        await registerPage.clickSubmitButton();
        await expect(await registerPage.getGreenPopUp()).toBeVisible();
        await expect(await registerPage.getGreenPopUp())
            .toContainText(`Account was successfully created. An email containing the instructions to activate your account was sent to ${email}`)

    })

    test('Should check registration with invalid data', async ({ page }) => {
        const header = new Header(page);
        const registerPage = new RegisterPage(page);
        await header.clickRegisterButton();
        await registerPage.addLogin(invalidLogin);
        await registerPage.addPassword(invalidPassword);
        await registerPage.addConfirmation(staticPassword);
        await registerPage.addEmail(invalidEmail);
        await registerPage.clickSubmitButton();
        await expect(await registerPage.getRedExplanationPopUp()).toBeVisible();
        await expect(await registerPage.getRedExplanationPopUpText())
            .toContain(`First name can't be blank
Last name can't be blank
Login has already been taken
Email is invalid
Password doesn't match confirmation
Password is too short (minimum is 4 characters)`)
    }) 

    test('Should check sigin with valid data', async ({ page }) => {
        const header = new Header(page);
        const loginPage = new LoginPage(page);
        await header.clickSignInButton();
        await loginPage.addLogin(invalidLogin);
        await loginPage.addPassword(staticPassword);
        await loginPage.clickLoginButton();
        await expect(await loginPage.getRedPopUp()).toBeVisible();
        await expect(await loginPage.getRedPopUp()).toContainText(`You haven't activated your account yet. If you want to receive a new activation email, please click this link.`);
    })

    test('Should check sigin with invalid data', async ({ page }) => {
        const header = new Header(page);
        const loginPage = new LoginPage(page);
        await header.clickSignInButton();
        await loginPage.addLogin(login);
        await loginPage.addPassword(invalidPassword);
        await loginPage.clickLoginButton();
        await expect(await loginPage.getRedPopUp()).toBeVisible();
        await expect(await loginPage.getRedPopUp()).toContainText(`Invalid user or password`);
    })

    test('Should check navigation links', async ({ page }) => {
        const header = new Header(page);
        await header.clickOverviewMenuButton();
        await expect(page).toHaveTitle(/.*Overview/);
        await header.clickDownloadMenuButton();
        await expect(page).toHaveTitle(/.*Download/);
        await header.clickActivityMenuButton();
        await expect(page).toHaveTitle(/.*Activity/);
        await header.clickRoadmapMenuButton();
        await expect(page).toHaveTitle(/.*Roadmap/);
        await header.clickIssuesMenuButton();
        await expect(page).toHaveTitle(/.*Issues/);
        await header.clickNewsMenuButton();
        await expect(page).toHaveTitle(/.*News/);
        await header.clickForumsMenuButton();
        await expect(page).toHaveTitle(/.*Forums/);
        await header.clickRepositoryMenuButton();
        await expect(page).toHaveTitle(/.*Repository/);
    })
 })

