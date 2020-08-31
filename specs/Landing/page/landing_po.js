class LandingPage{
    get loginBtn() { return $('//a[@href="/login"]/button')}
    get signUpBtn() { return $('//a[@href="/register"]')}
}
module.exports = LandingPage;