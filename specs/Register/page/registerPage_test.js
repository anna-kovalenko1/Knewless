const assert = require('assert');
const RegisterActions = require('../actions/register_pa');
const LandingActions = require('../../Landing/actions/landing_pa');
const credentials = require('../../../testData.json');
const RegisterPage = require('../page/register_po');
const pageSteps = new RegisterActions();
const landingPageSteps = new LandingActions();
const page = new RegisterPage();

// const MailSlurp = require("mailslurp-client").default;
// const mailSlurp = new MailSlurp({ apiKey: credentials.apiKey });


describe.only('register page tests', () =>{
    
    beforeEach(() =>{
    browser.maximizeWindow();
    browser.url(credentials.appURL);
    landingPageSteps.signUp();

     });

    afterEach(() =>{
    browser.reloadSession();
    });
    it('should register new user succesfullly', async () =>{
       // const inbox = await mailslurp.createInbox();
        //inbox.then(data=>{pageSteps.enterEmail(data.email)})
        pageSteps.emailGenerator();
        browser.switchWindow('Knewless');
        pageSteps.enterGeneratedEmail();
        pageSteps.enterPassword(credentials.registerPassword);
        pageSteps.enterRepeatPassword(credentials.registerPassword);
        pageSteps.clickSignUp();
        pageSteps.waitForConfirmMessage();
        browser.closeWindow();
        browser.switchWindow('10 Минутная Почта');
        pageSteps.openConfirmLetter();
        browser.switchWindow('Knewless');
        assert.equal(page.rolePopup.isDisplayed(), true);
    });


    it('should show validation message about invalid email', () =>{
        pageSteps.enterEmail(credentials.invalidEmail);
        pageSteps.waitForErrorInvalidMessage ();
        assert.equal(page.errorInvalidMessage.getText(), "Email length must be 5-71(with @) symbols (only digits, Latin letters and special characters allowed).");
    });

    it('should show validation message about invalid password', () =>{
        pageSteps.enterEmail(Math.floor(Math.random() *99999) + credentials.email);
        pageSteps.enterPassword(credentials.invalidPassword);
        pageSteps.enterRepeatPassword(credentials.invalidPassword);
        pageSteps.waitForErrorInvalidMessage ();
        assert.equal(page.errorInvalidMessage.getText(), ("Password length must be 8-32 symbols (only digits, Latin letters and special characters allowed)."));
    });


    it('should show validation message about existing email', () =>{
        pageSteps.enterEmail(credentials.email);
        pageSteps.enterPassword(credentials.registerPassword);
        pageSteps.enterRepeatPassword(credentials.registerPassword);
        pageSteps.signUp();
        pageSteps.waitForErrorExistEmail();
        assert.equal(page.errorExistEmail.getText(), "User with email 'clarkkent@mail.com' is already registered.");
    });
});

