module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load enterprise page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToEnterprise()
        //console.log('Current title is: ' + browser.title)
        browser.assert.title('npm Enterprise');
    }
};