let constants = require('../../pages/utilities/constants');

let loginpage = function () {
    let EC = ExpectedConditions;

    this.userName = element(by.css('#login-my-account-email'));
    this.password = element(by.css('#login-my-account-password'));
    this.loginButton = element(by.css('#login-my-account-submit-button'));
    this.errorMessage = element(by.css('#systemErrorMessage'));

    this.enterUserName = function (userNameValue) {
        browser.wait(EC.elementToBeClickable(this.userName), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.userName.clear();
        this.userName.sendKeys(userNameValue)
    }

    this.enterPassword = function (passwordValue) {
        browser.wait(EC.elementToBeClickable(this.password), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.password.clear();
        this.password.sendKeys(passwordValue)
    }

    this.clickLogInButton = function () {
        browser.wait(EC.elementToBeClickable(this.loginButton), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.loginButton.click()
    }

    this.login = function (userNameValue, passwordValue) {
        this.enterUserName(userNameValue);
        this.enterPassword(passwordValue);
        this.clickLogInButton();
    }
}

module.exports = new loginpage();