let constants = require('../../pages/utilities/constants');

let homepage = function () {
    let EC = ExpectedConditions;

    this.searchButton = element(by.css('li.filter-border.search-button'));
    this.menuOptions = element.all(by.css('.main-nav-container > ul > li > div > a'));
    this.loginRegisterButton = element(by.css('#GlobalHeaderLoginWidgetDropDownButton'));
    this.loginButton = element(by.css('#GlobalHeaderLoginContainer > a'));
    this.europeFeaturedCruises = element(by.css('.destination-tile-cards > div > div:nth-child(3)'));
    

    this.openHomePage = function (url) {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get(url);
    }

    this.clickLoginRegisterButton = function (url) {
        browser.wait(EC.elementToBeClickable(this.loginRegisterButton), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.loginRegisterButton.click()
    }

    this.clickLoginButton = function (url) {
        browser.wait(EC.elementToBeClickable(this.loginButton), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.loginButton.click()
    }

    this.navigateToLoginPage = function (url) {
        //this.clickLoginRegisterButton();
        this.clickLoginButton();
    }

    this.clickEuropeFeaturedCruises = function (){
        browser.wait(EC.elementToBeClickable(this.europeFeaturedCruises), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.europeFeaturedCruises.click()
    }
}

module.exports = new homepage();