class LoginPage{
    get createNewButton() { return $('//a[@href="/register"]')}
    get emailInput() {return $('input[type=email]')}
    get passwordInput() {return $('input[type=password]')}
    get loginButton() {return $("button[class='ui button styles_gradient__2o5vm styles_main_container__button_login__28xmH']")}
    get invalidCredsAlert() {return $('div[class="styles_main_container__error_message__104mC"]')}
    get profileBox() { return $('//div[@class="styles_profileWrp__2Yjv0"]')}
}

module.exports = LoginPage;