const donkeyKong = 'img[data-cy="kong"]';
const flyingBanana = 'img[data-cy="banana"]';

export function clickDonkeyKong() {
    cy.get(donkeyKong).click();
}

export function flyingBananaIsVisible() {
    cy.get(flyingBanana).should('be.visible');
}