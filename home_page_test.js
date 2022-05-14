describe('homepage test', function() {
  it('Home Page Title Validation', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.hollandamerica.com');
    expect(browser.getTitle()).toEqual('Cruises, Cruise Ship Deals, Travel Cruises | Holland America')
    browser.sleep(3000)
  });
});
