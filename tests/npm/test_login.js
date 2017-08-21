module.exports = {
    after : function(browser) {
        browser.end();
    },
    'Unsuccessful login' : function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToLogin()
        var login = browser.page.loginAndSignUp()
            .inputUsername('test username!')
            .inputPassword('test password!')
            .pressSubmit()
            .checkErrorPresent();
    },
    '@tags': ['signup'],
    'Sign up user': function (browser) {
        var home = browser.page.homepage()
        browser.init()
        home.goToLogin()
        var login = browser.page.loginAndSignUp()
            .pressSignup()
            .inputFullname('test fullname!')
            .inputEmail('test@email.com')
            .inputUsername('test username!')
            .inputPassword('test password!')
            .acceptTermsAndConditions()
        browser.assert.cssProperty('p > button.btn-highlight-1', 'disabled', '');
    }
};