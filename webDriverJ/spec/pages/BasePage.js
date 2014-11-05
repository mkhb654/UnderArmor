/**
 * Created by mkaleem on 11/4/14.
 */

(function () {
    'use strict';

    var appConfig = require('../config/AppConfig'),
        driverConfig = require('../config/DriverConfig'),
        BasePage;

    BasePage = function () {
        this.appConfig = appConfig;
    };

    BasePage.prototype.extend = function (page) {

    };

    BasePage.prototype.waitForElement = function (locator, timeout,
                                                  timeout_msg) {

        return driver.wait(function () {
            return driver.findElement(locator).then(function (element) {
                return element.isDisplayed();
            });
        })
    };

    module.exports = BasePage;

}());








