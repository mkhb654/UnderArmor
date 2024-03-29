/**
 * Created by mkaleem on 11/4/14.
 */
(function () {
    'use strict';

    var webdriver = require('selenium-webdriver'),
        SeleniumServer = require('selenium-webdriver/remote').SeleniumServer,
        server,
        driver,
        driverConfig;

    server = new SeleniumServer('/Users/mkaleem/Desktop/UnderArmour/selenium-server-standalone-2.42.2.jar',
        {port: 4444 });
    server.start();

    driver = new webdriver.Builder().
        usingServer(server.address()).
        withCapabilities(webdriver.Capabilities.firefox()).
        build();

    driver.manage().window().maximize();

    global.driver = driver;
    global.by = webdriver.By;

    module.exports = driverConfig;


}());

