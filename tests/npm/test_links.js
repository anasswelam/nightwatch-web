module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load npm homepage' : function (browser) {
        var home = browser.page.homepage()
        browser.init()//this auto grabs launch_url value from nightwatch.json
        browser.assert.title("npm");
    },
    'Load enterprise page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToEnterprise()
        browser.assert.title('npm Enterprise');
    },
    'Load features page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToFeatures()
        browser.assert.title('npm');
    },
    'Load pricing page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToPricing()
        browser.assert.title('npm');
    },
    'Load documentation page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToDocumentation()
        browser.assert.title('npm Documentation');
    },
    'Load support page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToSupport()
        browser.assert.title('npm');
    }
};