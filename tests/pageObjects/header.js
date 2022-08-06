const { GeneralPage } = require('./generalPage');

const signInButton = '[href="/login"]';
const registerButton = '[href="/account/register"]'; //"//a[@href='/account/register']/.."
const overviewMenuButton = '[href="/projects/redmine"]';
const downloadMenuButton = '[class="download"]';
const activityMenuButton = '[class="activity"]';
const roadmapMenuButton = '[class="roadmap"]';
const issuesMenuButton = '[class="issues"]';
const newsMenuButton = '[class="news"]';
const forumsMenuButton = '[class="boards"]';
const repositoryMenuButton = '[class="repository"]';

class Header extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    
    async clickSignInButton() {
         
        await super.clickElement(signInButton);
    }
    async clickRegisterButton() {
        await super.clickElement(registerButton);
    }
    async clickOverviewMenuButton() {
        await super.clickElement(overviewMenuButton);
    }
    async clickDownloadMenuButton() {
        await super.clickElement(downloadMenuButton);
    }
    async clickActivityMenuButton() {
        await super.clickElement(activityMenuButton);
    }
    async clickRoadmapMenuButton() {
        await super.clickElement(roadmapMenuButton);
    }
    async clickIssuesMenuButton() {
        await super.clickElement(issuesMenuButton);
    }
    async clickNewsMenuButton() {
        await super.clickElement(newsMenuButton);
    }
    async clickForumsMenuButton() {
        await super.clickElement(forumsMenuButton);
    }
    async clickRepositoryMenuButton() {
        await super.clickElement(repositoryMenuButton);
    }
 

}
module.exports = { Header };