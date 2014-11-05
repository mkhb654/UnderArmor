/**
 * Created by mkaleem on 11/4/14.
 */
(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homepage = require('./HomePage'),
        loginpage;

    loginpage = new BasePage();

    loginpage = loginpage.extend({



        validLogin: function (username, password) {
            this.waitForLoad();

            driver.findElement(By.xpath("html/body/div[2]/div[2]/div/form[1]/div[2]/input")).sendKeys(username);
            driver.findElement(by.xpath("html/body/div[2]/div[2]/div/form[1]/div[3]/input")).sendKeys(password);
            driver.findElement(by.id("login-button")).click();
            homepage.waitForLoad();
            return homepage;
        }

        });

    module.exports = loginpage;

}());

