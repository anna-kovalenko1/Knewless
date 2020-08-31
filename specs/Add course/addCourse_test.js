const LoginActions = require('../Login/actions/login_pa');
const LandingActions = require('../Landing/actions/landing_pa');
const AddCourseActions = require('../Add course/actions/add_course_pa')
const data = require('../../testData.json');
const assert = require('assert');

const loginSteps = new LoginActions();
const landingPageSteps = new LandingActions();
const pageSteps = new AddCourseActions();

describe.only('add course tests', () =>{
    
    beforeEach(() =>{
        browser.maximizeWindow();
        browser.url(data.appURL);
        landingPageSteps.logIn();
    });

    afterEach(() =>{
        browser.reloadSession();
    });

    it('should be able to add course with valid data', () =>{
        loginSteps.enterEmail(data.email);
        loginSteps.enterPassword(data.password);
        loginSteps.LogIn();
        pageSteps.addNewCourse();
        pageSteps.addLecture();
        pageSteps.createCourseDescription();
        pageSteps.releaseCourse();
        browser.pause(2000);
        // assert.equal(;

    });
});
