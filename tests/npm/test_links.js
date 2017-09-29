module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load npm homepage' : function (browser) {
        var home = browser.page.homepage()
        browser.init()//this auto grabs launch_url value from nightwatch.json
        browser.verify.title("npm");
    },//something failing here ... need to continue test even if failed
    'Load enterprise page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToEnterprise()
        browser.verify.title('npm Enterprise');
    },
    'Load features page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToFeatures()
        browser.verify.title('npm');
    },
    'Load pricing page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToPricing()
        browser.verify.title('npm');
    },
    'Load documentation page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToDocumentation()
        browser.verify.title('npm Documentation');
    },
    'Load support page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToSupport()
        browser.verify.title('npm');
    }
};