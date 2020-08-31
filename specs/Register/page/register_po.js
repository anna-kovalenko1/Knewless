class RegisterPage{
    get email() {return $('#fe_text')}
    get buttonCopy() {return $('#copy-button')}
    get confirmMessage() {return $(".styles_messagecontainer__3w9C_")}
    get confirmLetter() {return $("//td[contains(text(),'knewlessbsa@gmail.com')]")};
    get confirmLink() {return $('//a[contains(text(),"link")]')}
    get createNewButton() { return $('//a[@href="/register"]')}
    get emailInput() {return $('input[placeholder="Email"]')}
    get passwordInput() {return $('input[placeholder="Password"]')}
    get repeatPasswordInput() {return $('input[placeholder="Repeat password"]')}
    get signUpButton() {return $("button[class='ui button styles_gradient__2o5vm styles_main_container__button_auth__10Y5g']")}
    get invalidCredsAlert() {return $('div[class="styles_main_container__error_message__104mC"]')}
    get rolePopup() { return $('.styles_inner_container__1YwBb')}
    get errorExistEmail() {return $('div[class="styles_main_container__error_message__104mC"]')}
    get errorInvalidMessage() {return $('div[class="content"]')}
    get newEmail() {return $('.fa-user-secret')}
} 

module.exports = RegisterPage;