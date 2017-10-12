module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load features page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToFeatures()
        browser.assert.title('npm');
    }
};