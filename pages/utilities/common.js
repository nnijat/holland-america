let constants = require('../../pages/utilities/constants');

let common = function () {
  let EC = ExpectedConditions;

  this.getPageTitle = function () {
    return browser.getTitle();
  }

  this.validateElementCollectionByText = function (elementCollections, list) {
    elementCollections.each(function (element, index) {
      browser.wait(EC.visibilityOf(element), constants.WAIT_MEDIUM, 'Element is NOT visible')
      element.getText().then(function (text) {
        expect(text).toBe(list[index]);
      });
    });
  }

  this.validateMessageText = function (element, messageText) {
    browser.wait(EC.visibilityOf(element), constants.WAIT_MEDIUM, 'Element is NOT visible')
    element.getText().then(function (text) {
      expect(text).toBe(messageText);
    })
  }
}

module.exports = new common();