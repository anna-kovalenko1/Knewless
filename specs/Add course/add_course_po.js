class AddCoursePage{
    get courseName() {return $('//div[@class="ui fluid inverted input styles_customInput__37tRk"]//input')}
    get level() {return $('//input[@class="search"]')}
    get selectLevel() {return $('//span[@class="text"]')}
    get descriptionCourse() {return $('.styles_customtextarea__3HXdD')}
    get add_lecture() {return $('.styles_add_button__3S2SD')}
    get create_new_course_button() {return $('//div[@class="styles_wide_container__3Npe2 styles_content_row__2UOK2"]//a[2]')}
    get selectLecture() {return $('div.styles_meta__actionButton__3h-Xd > div.ui.tiny.basic.label.styles_toolBarIcon__1zKW9')}
    get releaseButton() {return $('.ui.button.styles_gradient__2o5vm.styles_button_release__368oW')}
} 

module.exports = AddCoursePage;
