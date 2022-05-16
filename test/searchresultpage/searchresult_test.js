let homePage = require('../../pages/homepage/homepage');
let constants = require('../../pages/utilities/constants');
let common = require('../../pages/utilities/common');
let searchpage = require('../../pages/searchpage/searchpage');
let tripdetailpage = require('../../pages/tripdetailpage/tripdetailpage');

let EC = ExpectedConditions;
let result = '2 RESULTS';
let tripTitle = '16-Day Circle Hawaii';
let price = '1,499';

describe('homepage test', function () {
    beforeEach(function () {
        homePage.openHomePage(constants.HOME_URL);
    });

    it('Filter Result Validation', function () {
        homePage.clickEuropeFeaturedCruises();
        searchpage.clickDepartFromDropdown();
        searchpage.selectLocationByName(searchpage.location, constants.LOCATION_BOSTON)
        searchpage.clickViewResultButton();
        common.validateMessageText(searchpage.result, result)
    });

    it('Next button Validation', function () {

        searchpage.clickTargetFilterDropdown(constants.FILTER_DESTINATIONS)
        searchpage.selectLocationByName(searchpage.location, constants.LOCATION_EUROPE)
        searchpage.clickViewResultButton();
        searchpage.clickNextButton()
    });

    it('Target Trip Price Validation', function () {

        searchpage.clickTargetFilterDropdown(constants.FILTER_DESTINATIONS)
        searchpage.selectLocationByName(searchpage.location, constants.LOCATION_HAWAII_TAHITI)
        searchpage.clickTargetFilterDropdown(constants.FILTER_DEPART_FROM)
        searchpage.selectLocationByName(searchpage.location, constants.LOCATION_VANCOUVER)
        searchpage.clickViewResultButton();
        searchpage.clickViewItineraryByTripTitle(tripTitle, searchpage.viewItineraryList)
        common.validateMessageText(tripdetailpage.tripPrice, price)
    });
});
