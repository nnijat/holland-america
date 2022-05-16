

let constants = require('../../pages/utilities/constants');

let searchpage = function () {
    let EC = ExpectedConditions;

    this.departFromDropdown = element(by.css('.inner-container > ul > li:nth-child(4) > button > div'));
    this.location = element.all(by.css('.sail-to > button'));
    this.viewResultButton = element(by.css('button.close-search'));
    this.result = element(by.css('div.results'));
    this.filters = element.all(by.css('.inner-container > ul > li> button'));
    this.dropDown = element.all(by.css('.sail-to > button'));
    this.tripTitle = element.all(by.css('section > div > header > h2'));
    this.viewItineraryList = element.all(by.css('.price-per-person > a'))
    this.nextButton = element(by.css('div > button.next'));



    this.clickDepartFromDropdown = function () {
        browser.wait(EC.elementToBeClickable(this.departFromDropdown), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.departFromDropdown.click()
    }

    this.clickViewResultButton = function () {
        browser.wait(EC.elementToBeClickable(this.viewResultButton), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.viewResultButton.click()
    }


    this.clickNextButton = function () {
        browser.wait(EC.elementToBeClickable(this.nextButton), constants.WAIT_MEDIUM, 'Element is NOT clickable')
        this.nextButton.click()
    }

    this.clickTargetFilterDropdown = function (filterName){
        this.filters.each(function (element) {
            browser.wait(EC.visibilityOf(element), constants.WAIT_MEDIUM, 'Element is NOT visible')
            element.getText().then(function (text) {
                if (text == filterName) {
                    element.click();
                }
            });
        });
    }

    this.selectLocationByName = function (elementCollections, locationName) {
        elementCollections.each(function (element) {
            browser.wait(EC.visibilityOf(element), constants.WAIT_MEDIUM, 'Element is NOT visible')
            element.getText().then(function (text) {
                if (text == locationName) {
                    element.click();
                }
            });
        });
    }

    this.clickViewItineraryByTripTitle = function (tripTitleName, itineraryList) {
        
        this.tripTitle.each(function (element,index) {
            browser.wait(EC.visibilityOf(element), constants.WAIT_MEDIUM, 'Element is NOT visible')
            element.getText().then(function (text) {
                if (text == tripTitleName) {
                    itineraryList.get(index).click();
                }
            });
        });
    }
}

module.exports = new searchpage();

