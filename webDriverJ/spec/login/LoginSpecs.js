/**
 * Created by mkaleem on 11/4/14.
 */test.describe("UnderArmour login Page", function(){



    'use strict';

    test.beforeEach("Open Landing  Page", function() {
        loginpage.go();
    });

    test.it("Should login user to ", function() {
        loginpage.validLogin(logindata.adminUsername,
            logindata.adminPassword);
        expect(homepage.isDisplayed()).to.eventually.equal(true);
    });

});