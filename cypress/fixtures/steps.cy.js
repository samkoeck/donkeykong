import * as homePage from '../pageobjects/homePage.po';
import * as formPage from '../pageobjects/formPage.po';
import * as uglyPicturePage from '../pageobjects/uglyPicturePage.po';
import * as coconutPage from '../pageobjects/coconutPage.po';
import * as bananaThrowPage from '../pageobjects/bananaThrowPage.po';

export function goToFormPage() {
    homePage.goToHomePage();
    homePage.fillInUsername('admin');
    homePage.fillInPassword('admin');
    homePage.clickLoginButton();
}

export function goToUglyPicturePage() {
    goToFormPage();
    formPage.fillInFirstName("sam");
    formPage.fillInLastName("test");
    formPage.fillInPhoneNumber('0485157642');
    formPage.fillInAttendees('2');
    formPage.fillInEmail('test@test.be');
    formPage.clickSubmitButton();
}

export function goToCoconutPage() {
    goToUglyPicturePage();
    uglyPicturePage.closeAllPictures();
    uglyPicturePage.clickYesIAmButton();
}

export function goToDonkeyKongPage() {
    goToCoconutPage();
    for (let i = 1; i <=15; i++) {
        coconutPage.clickCoconut(i);
    }
    coconutPage.clickContinueButton();
}