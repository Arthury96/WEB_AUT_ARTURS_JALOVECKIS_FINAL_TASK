import { basepage } from "./basepage";

// class layer for main methodes
export class objectPage extends basepage {
  static get url() {
    return "/automation-practice-form";
  }

  static get firstNameField() {
    return cy.get("#firstName");
  }

  static get lastNameField() {
    return cy.get("#lastName");
  }

  static get emailField() {
    return cy.get("#userEmail");
  }

  static get radioMaleButton() {
    return cy.get("#gender-radio-1");
  }

  static get numberField() {
    return cy.get("#userNumber");
  }

  static get calendarField() {
    return cy.get(".react-datepicker__input-container");
  }

  static get calendarMonthSelector() {
    return cy.get(".react-datepicker__month-select");
  }

  static get calendarYearSelector() {
    return cy.get(".react-datepicker__year-select");
  }

  static get calendarDaySelector() {
    return cy.get(".react-datepicker__day");
  }

  static get subjectField() {
    return cy.get("#subjectsInput");
  }

  static get confirmAutocompleteField() {
    return cy.get(".subjects-auto-complete__menu");
  }

  static get sportCheckbox() {
    return cy.get("#hobbies-checkbox-1");
  }

  static get uploadPicture() {
    return cy.get("#uploadPicture");
  }

  static get currentAddress() {
    return cy.get("#currentAddress");
  }

  static get selectState() {
    return cy.get("#state");
  }

  static get selectStateNCR() {
    return cy.get("#react-select-3-input");
  }

  static get selectCity() {
    return cy.get("#city");
  }

  static get selectDehli() {
    return cy.get("#react-select-4-input");
  }

  static get submitButton() {
    return cy.get("#submit");
  }
}
