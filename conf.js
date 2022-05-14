// An example configuration file.
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['home_page_test.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
