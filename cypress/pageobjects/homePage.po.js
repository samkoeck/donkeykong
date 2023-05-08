const usernameField = 'input[data-cy="user-name"]';
const passwordField = 'input[data-cy="password"]';
const loginButton = 'button[data-cy="login"]';

export function goToHomePage() {
    cy.visit('http://ui-training-application.s3-website-eu-west-1.amazonaws.com/');
}

export function fillInUsername(name) {
    cy.get(usernameField).type(name);
}

export function fillInPassword(password) {
    cy.get(passwordField).type(password);
}

export function clickLoginButton() {
    cy.get(loginButton).click();
}

export function usernameFieldIsVisble() {
    cy.get(usernameField).should('be.visible');
}

export function passwordFieldIsVisble() {
    cy.get(passwordField).should('be.visible');
}

export function loginButtonIsVisble() {
    cy.get(loginButton).should('be.visible');
}