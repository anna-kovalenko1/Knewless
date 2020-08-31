const LoginPage = require('../page/login_po');
const credentials = require('../../../testData.json');
const page = new LoginPage();

class LoginActions{

    enterEmail(value){
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.clearValue();
        page.emailInput.setValue(value);
    };

    enterPassword(value){
        page.passwordInput.waitForDisplayed(2000);
        page.passwordInput.clearValue();
        page.passwordInput.setValue(value);
    };

    LogIn(){
        this.waitForLogInButton();
        page.loginButton.click();
    }

    waitForLogInButton(){
        page.loginButton.waitForDisplayed(2000);
    }

    logInAsRegisteredUser(email){
        this.waitForLogInButton();
        this.enterEmail(email);
        this.enterPassword(credentials.password);
        this.LogIn();
    }


    waitForErrorNotification() {
        page.invalidCredsAlert.waitForDisplayed(5000);
    }


    redirectedTo(route){
        browser.pause(2000);
        const url = new URL(browser.getUrl());
        const actualUrl = url.host.toString() + url.pathname.toString();
        return actualUrl.includes(route);
    }
};

module.exports = LoginActions;