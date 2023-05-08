const closePictureButton1 = 'span[id="button-close-1"]';
const closePictureButton2 = 'span[id="button-close-2"]';
const closePictureButton3 = 'span[id="button-close-3"]';
const closePictureButton4 = 'span[id="button-close-4"]';
const closePictureButton5 = 'span[id="button-close-5"]';
const closePictureButton6 = 'span[id="button-close-6"]';
const closePictureButton7 = 'span[id="button-close-7"]';
const closePictureButton8 = 'span[id="button-close-8"]';
const closePictureButton9 = 'span[id="button-close-9"]';
const yesIAmButton = 'button[data-cy="login"]';
const spamPictures = '.spam';

export function closeAllPictures() {
    let countOfElements = 0;
    cy.get(spamPictures).then($elements => {
        countOfElements = $elements.length;
        for (let i=0; i < countOfElements; i++) {
            cy.get(`span[id="button-close-${i+1}"]`).click({force:true});
        }
    });
}

export function clickYesIAmButton() {
    cy.get(yesIAmButton).click();
}

export function clickClosePictureButton1() {
    cy.get(closePictureButton1).click({force:true});
}

export function clickClosePictureButton2() {
    cy.get(closePictureButton2).click({force:true});
}

export function clickClosePictureButton3() {
    cy.get(closePictureButton3).click({force:true});
}

export function clickClosePictureButton4() {
    cy.get(closePictureButton4).click({force:true});
}

export function clickClosePictureButton5() {
    cy.get(closePictureButton5).click({force:true});
}

export function clickClosePictureButton6() {
    cy.get(closePictureButton6).click({force:true});
}

export function clickClosePictureButton7() {
    cy.get(closePictureButton7).click({force:true});
}

export function clickClosePictureButton8() {
    cy.get(closePictureButton8).click({force:true});
}

export function clickClosePictureButton9() {
    cy.get(closePictureButton9).click({force:true});
}
