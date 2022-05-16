let constants = function () {

    //Timeout Waits
    this.WAIT_EXTRA_SHORT = 1000;
    this.WAIT_SHORT = 5000;
    this.WAIT_MEDIUM = 10000;
    this.WAIT_LONG = 30000
    this.WAIT_EXTRA_LONG = 30000

    //Reuseable Variables 
    this.HOME_URL = 'https://www.hollandamerica.com';
    this.incorrectUserName = '12345';
    this.incorrectPassword = 'wrongPW';
    this.homePageTitle = 'Cruises, Cruise Ship Deals, Travel Cruises | Holland America';
    this.loginErrorMessage = 'We\'re unable to log you in using the information you provided. Please double-check your information and try again.';
    this.menuItems = ["PLAN", "DESTINATIONS", "THE EXPERIENCE", "CRUISE DEALS", "ALREADY BOOKED"];

    //Locations From Filter Dropdown
    this.LOCATION_BOSTON = 'Boston, Massachusetts, US';
    this.LOCATION_HAWAII_TAHITI = 'HAWAII & TAHITI';
    this.LOCATION_VANCOUVER = 'Vancouver, B.C., CA';
    this.LOCATION_EUROPE = 'EUROPE';

    //Filter Dropdown
    this.FILTER_DESTINATIONS = 'DESTINATIONS';
    this.FILTER_DEPART_FROM = 'DEPART FROM'
    this.FILTER_DEPARTURE_DATA = 'DEPARTURE DATA'
    this.FILTER_DURATION = 'DURATION'
}

module.exports = new constants();