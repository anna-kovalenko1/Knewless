const loginPage = require('../../Login/actions/login_pa')
const AddCoursePage = require('../add_course_po');
const credentials = require('../../../testData.json');

const page = new AddCoursePage();

class AddCourseActions{
    
    addNewCourse(){
        page.create_new_course_button.waitForDisplayed(2000);
        page.create_new_course_button.click();
    }
    
    
    addLecture(){
        page.add_lecture.waitForDisplayed(2000);
        page.add_lecture.click();
        page.selectLecture.click();
        browser.keys('Escape')
        
    }
   
    createCourseDescription(){
        page.courseName.clearValue();
        page.courseName.setValue(credentials.courseName);
        page.level.clearValue();
        page.level.setValue(credentials.courseLevel);
        page.selectLevel .waitForDisplayed(2000);
        page.selectLevel.click();
        page.descriptionCourse.clearValue();
        page.descriptionCourse.setValue(credentials.courseDescription);
    
    }
    
    releaseCourse(){
        page.releaseButton.waitForDisplayed(2000);
        page.releaseButton.click();
    }


}

module.exports = AddCourseActions;

