const LandingPage = require('../page/landing_po');
const credentials = require('../../../testData.json');
const page = new LandingPage();

class LandingActions{
    
    logIn(){
        this.waitForLogInButton();
        page.loginBtn.click();
    }
    signUp(){
        this.waitForSignUpButton();
        page.signUpBtn.click();
    }
    
    waitForSignUpButton(){
        page.signUpBtn.waitForDisplayed(2000);
    }
    
    waitForLogInButton(){
        page.loginBtn.waitForDisplayed(2000);
    }
}

module.exports = LandingActions;