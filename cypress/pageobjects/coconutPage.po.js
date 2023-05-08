const coconut = 'img[src="assets/images/donkey/nuts.png"]';
const continueButton = 'button[data-cy="login"]';

export function clickCoconut(n) {
    cy.get(coconut).eq(n-1).click();
}

export function clickContinueButton() {
    cy.get(continueButton).click();
}