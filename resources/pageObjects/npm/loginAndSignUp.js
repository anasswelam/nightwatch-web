'use strict';

module.exports = {
    elements: {
        usernameField: {
            selector: '#name'
        },
        passwordField: {
            selector: '#password'
        },
        fullnameField: {
            selector: '#fullname'
        },
        emailField: {
            selector: '#email'
        },
        submitButton: {
            selector: '.form-group button'
        },
        errorMessage: {
            selector: 'div.alert-error'
        },
        signUpButton: {
            selector: 'a[href="/signup"]'
        },
        tsAndCs: {
            selector: '#eula-agreement-cbx'
        }
    },
    commands: [{
        inputUsername: function(text) {
            return this.setValue('@usernameField', text);
        },
        inputPassword: function(text) {
            return this.setValue('@passwordField', text);
        },
        inputFullname: function(text) {
            return this.setValue('@fullnameField', text);
        },
        inputEmail: function(text) {
            return this.setValue('@emailField', text);
        },
        pressSubmit: function() {
            return this.click('@submitButton');
        },
        checkErrorPresent: function() {
            this.api.pause(1000)
            return this.assert.elementPresent('@errorMessage');
        },
        pressSignup: function() {
            return this.click('@signUpButton');
        },
        acceptTermsAndConditions: function() {//not really working below ...
            /*if(!(this.getValue('@tsAndCs')))
                {
                    //return console.log("Did click");
                    //return this.click('@tsAndCs');
                }
            return console.log("Did not click");*/
            return this.click('@tsAndCs');
        }
    }]
};