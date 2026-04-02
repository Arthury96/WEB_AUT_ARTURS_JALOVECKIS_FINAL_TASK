import { objectPage } from "./obj/objPage";

describe("Final task", () => {
  context("Main test case", () => {
    beforeEach(() => {
      objectPage.visit();
    });

    it("Set values", () => {
      //Selector method call
      objectPage.firstNameField.type("Donald");
      objectPage.lastNameField.type("Trump");
      objectPage.emailField.type("DonnyTrunto@email.com");
      objectPage.radioMaleButton.click();
      objectPage.numberField.type("1234567890");
      objectPage.calendarField.click();
      objectPage.calendarMonthSelector.select(3);
      objectPage.calendarYearSelector.select(30);
      objectPage.calendarDaySelector.contains("23").click();
      objectPage.subjectField.type("Economics");
      objectPage.confirmAutocompleteField.click();
      objectPage.sportCheckbox.click();
      objectPage.uploadPicture.selectFile("cypress/e2e/obj/Wat.html");
      objectPage.currentAddress.type("Test Address 1");
      objectPage.selectState.click();
      objectPage.selectStateNCR.type("NCR{enter}");
      objectPage.selectCity.click();
      objectPage.selectDehli.type("Delhi{enter}");
      objectPage.submitButton.click();

      var validateMethod = (field, value) => {
        // common method to test table values
        cy.contains("td", field).next().should("have.text", value);
      };

      //Valiadtion method call
      validateMethod("Student Name", "Donald Trump");
      validateMethod("Student Email", "DonnyTrunto@email.com");
      validateMethod("Gender", "Male");
      validateMethod("Mobile", "1234567890");
      validateMethod("Date of Birth", "23 April,1930");
      validateMethod("Subjects", "Economics");
      validateMethod("Hobbies", "Sports");
      validateMethod("Picture", "Wat.html");
      validateMethod("Address", "Test Address 1");
      validateMethod("State and City", "NCR Delhi");
    });
  });
});
