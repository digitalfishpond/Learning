// An example configuration file.
exports.config = {
	directConnect: true,

  // Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},

  // Framework to use. Jasmine 2 is recommended.
	//framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when protractor is called.
  // Run multiple tests simultaneously with:
  // specs: ['*_spec.js'],
	specs: ['myspec_spec.js'],

  // Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
