/**
 * Created
 */

(function () {
    'use strict';

    var appConfig = require('../config/AppConfig'),
        driverConfig = require('../config/DriverConfig')
        homepage;

        (function () {
            'use strict'

            homepage = homepage.extend({



                waitForLoad: function () {
                    return this.waitForElement(by.xpath("main"));
                },

                isDisplayed: function () {
                    this.waitForLoad().then(null, function(error) {
                        return false;
                    });
                    return driver.findElement(by.xpath("main")).isDisplayed();
                }

            });

            module.exports = homepage;

        }());


}());