const MainPage = require('../page/main_po');
const page = new MainPage();

class MainActions{
    isProfileBoxDisplayed(){
        page.profileBox.waitForDisplayed(2000);
        return page.profileBox.isDisplayed();
    }
}

module.exports = MainActions;