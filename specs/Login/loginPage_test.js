const LoginActions = require('./actions/login_pa');
const LandingActions = require('../Landing/actions/landing_pa');
const credentials = require('../../testData.json');
const assert = require('assert');
const MainActions = require('../Main/actions/main_pa');

const pageSteps = new LoginActions();
const landingPageSteps = new LandingActions();
const mainPageSteps = new MainActions();

describe.only('login page tests', () =>{
    
    beforeEach(() =>{
        browser.maximizeWindow();
        browser.url(credentials.appURL);
        landingPageSteps.logIn();

    });

    afterEach(() =>{
        browser.reloadSession();
    });

    xit('should not be able to log in with invalid credentials', () =>{
        pageSteps.enterEmail(credentials.invalidEmail);
        pageSteps.enterPassword(credentials.invalidPassword);
        pageSteps.LogIn();
        pageSteps.waitForErrorNotification();
        assert.equal(pageSteps.redirectedTo(credentials.loginRoute),true);
    });

    xit('should be able to log in with valid credentials', () =>{
        pageSteps.enterEmail(credentials.email);
        pageSteps.enterPassword(credentials.password);
        pageSteps.LogIn();
        assert.equal(mainPageSteps.isProfileBoxDisplayed(), true);
        //assert.equal(pageSteps.redirectedTo(credentials.loginRoute),true);
    });
});