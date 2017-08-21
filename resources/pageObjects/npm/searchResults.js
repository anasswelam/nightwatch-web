'use strict';

module.exports = {
    elements: {
        packages: {
            selector: 'li.package-details'
        }
    },
    commands: [{
        checkAtLeast1Result: function() {
            return this.assert.elementPresent('@packages');
        },
    }]
};