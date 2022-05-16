// An example configuration file.
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['./test/homepage/homepage_test.js',
          './test/searchresultpage/searchresult_test.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
