module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load support page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToSupport()
        browser.assert.title('npm');
    }
};