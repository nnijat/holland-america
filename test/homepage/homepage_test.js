let homePage = require('../../pages/homepage/homepage');
let loginPage = require('../../pages/loginpage/loginpage');
let constants = require('../../pages/utilities/constants');
let common = require('../../pages/utilities/common');

let EC = ExpectedConditions;

describe('homepage test', function () {
  beforeEach(function () {
    homePage.openHomePage(constants.HOME_URL);
  });

  it('Home Page Validation By Title', function () {
    expect(common.getPageTitle()).toEqual(constants.homePageTitle)
  });

  it('Home Page Menu Bar Validation', function () {
    common.validateElementCollectionByText(homePage.menuOptions, constants.menuItems)

  });

  it('Negative Log In Validation ', function () {
    homePage.navigateToLoginPage();
    loginPage.login(constants.incorrectUserName, constants.incorrectPassword);
    common.validateMessageText(loginPage.errorMessage, constants.loginErrorMessage)
  });
});
