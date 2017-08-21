'use strict';

module.exports = {
    url: function() {
        //return this.api.launchUrl + "/subPage";
        return 'https://www.npmjs.com';
    },
    elements: {
        enterpriseLink: {
            selector: 'a#nav-enterprise-link'
        },
        featuresLink: {
            selector: 'a#nav-features-link'
        },
        pricingLink: {
            selector: 'a#nav-pricing-link'
        },
        documentationLink: {
            selector: 'a#nav-docs-link'
        },
        supportLink: {
            selector: 'a#nav-support-link'
        },
        searchBox: {
            selector: 'input#site-search'
        },
        searchForm: {
            selector: 'form#npm-search'
        },
        loginLink: {
            selector: 'a[href="/login"]'
        }
    },
    commands: [{
        goToEnterprise: function() {
            return this.click('@enterpriseLink');
        },
        goToFeatures: function() {
            return this.click('@featuresLink');
        },
        goToPricing: function() {
            return this.click('@pricingLink');
        },
        goToDocumentation: function() {
            return this.click('@documentationLink');
        },
        goToSupport: function() {
            return this.click('@supportLink');
        },
        goToLogin: function() {
            return this.click('@loginLink');
        },
        searchForPackage: function(text) {
            this.setValue('@searchBox', text)
            return this.click('#npm-search button');
            //return this.submitForm('@searchForm');
        }
    }]
};