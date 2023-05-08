import * as homePage from '../pageobjects/homePage.po';
import * as formPage from '../pageobjects/formPage.po';
import * as uglyPicturePage from '../pageobjects/uglyPicturePage.po';
import * as coconutPage from '../pageobjects/coconutPage.po';
import * as bananaThrowPage from '../pageobjects/bananaThrowPage.po';

describe('hackaton website', () => {

    // it('9 pictures are visible', () => {
    //     steps.goToUglyPicturePage();

    //     //afgerond 14:59
    // });

    // it('formfields are all visible', () => {
    //     steps.goToFormPage();
    //     formPage.firstNameFieldIsVisble();
    //     formPage.lastNameFieldIsVisble();
    //     formPage.emailFieldIsVisble();
    //     formPage.phoneFieldIsVisble();
    //     formPage.attendeesFieldIsVisble();
    //     formPage.submitButtonIsVisble();

    //     //afgerond 14:59
    // });

    // it('inlogfields are all visible', () => {
    //     homePage.goToHomePage();
    //     homePage.usernameFieldIsVisble();
    //     homePage.passwordFieldIsVisble();
    //     homePage.loginButtonIsVisble();
    //     //afgerond 14.53
    // });

    it('goes through the whole flow', () => {
        // homepage login
        homePage.goToHomePage();
        homePage.fillInUsername('admin');
        homePage.fillInPassword('admin');
        homePage.clickLoginButton();

        //formpage invullen
        formPage.fillInFirstName("sam");
        formPage.fillInLastName("test");
        formPage.fillInPhoneNumber('0485157642');
        formPage.fillInAttendees('2');
        formPage.fillInEmail('test@test.be');
        formPage.clickSubmitButton();

        //lelijke fotos sluiten
        uglyPicturePage.closeAllPictures();
        uglyPicturePage.clickYesIAmButton();

        //cocosnoten kraken 15 stuks
        for (let i = 1; i <=15; i++) {
            coconutPage.clickCoconut(i);
        }
        coconutPage.clickContinueButton();

        //donkey kong gooit met een banaan
        bananaThrowPage.clickDonkeyKong();
        bananaThrowPage.flyingBananaIsVisible();

        //afgerond 14.34
    });
});