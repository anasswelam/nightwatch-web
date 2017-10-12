module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Load documentation page' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToDocumentation()
        browser.assert.title('npm Documentation');
    }
};