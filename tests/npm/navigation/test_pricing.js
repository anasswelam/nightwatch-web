module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load pricing page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToPricing()
        browser.assert.title('npm');
    }
};