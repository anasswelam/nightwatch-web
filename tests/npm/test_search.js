module.exports = {
    after : function(browser) {
        browser.end();
    },
    '@tags': ['search'],
    'Search for a package' : function (browser) {
        var home = browser.page.homepage()
            .navigate()//leaving this here as an alternative for browser.init(). This get url from Page Object
            .searchForPackage('node')
        var results = browser.page.searchResults()
        browser.waitForElementVisible('body', 1000)
        results.checkAtLeast1Result();
    }
};