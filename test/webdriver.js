var assert = require('assert')

// start webdriver before running test
describe('grunt-webdriverjs test', function () {
    it('should have right options', function () {
        assert.strictEqual(browser.options.waitforTimeout, 12345)
        assert.strictEqual(browser.options.logLevel, 'trace')
    })
})