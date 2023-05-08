const firstNameField = 'input[data-cy="user-name"]';
const lastNameField = 'input[data-cy="lastName"]';
const phoneField = 'input[data-cy="phone"]';
const attendeesField = 'input[data-cy="attendees"]';
const emailField = 'input[data-cy="email"]';
const submitButton = 'button[data-cy="login"]';

export function firstNameFieldIsVisble() {
    cy.get(firstNameField).should('be.visible');
}

export function lastNameFieldIsVisble() {
    cy.get(lastNameField).should('be.visible');
}

export function phoneFieldIsVisble() {
    cy.get(phoneField).should('be.visible');
}

export function attendeesFieldIsVisble() {
    cy.get(attendeesField).should('be.visible');
}

export function emailFieldIsVisble() {
    cy.get(emailField).should('be.visible');
}

export function submitButtonIsVisble() {
    cy.get(submitButton).should('be.visible');
}

export function clickSubmitButton() {
    cy.get(submitButton).click();
}

export function fillInFirstName(name) {
    cy.get(firstNameField).type(name);
}

export function fillInLastName(name) {
    cy.get(lastNameField).type(name);
}

export function fillInPhoneNumber(number) {
    cy.get(phoneField).type(number);
}

export function fillInAttendees(number) {
    cy.get(attendeesField).type(number);
}

export function fillInEmail(email) {
    cy.get(emailField).type(email);
}