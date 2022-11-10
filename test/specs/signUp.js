const HomePage = require('../pageobjects/homePage.page');
const SignUp = require('../pageobjects/signUp.page');
// var chaiExpect = chai.expect;

describe('Sign Up', () => {
    before(async () => {
        await HomePage.open();
    });
    
    it('Verify Url', async () => {
        await expect(browser).toHaveTitle('STORE');
    });

    it('Verify Sign Up', async () => {
        await SignUp.signUpMethod();

        await browser.execute('window.alert()');
        await browser.pause(3000);
        console.log(browser.isAlertOpen());
        await browser.pause(3000);
        await browser.acceptAlert();

        const alertText = await browser.getAlertText();
        console.log(alertText);
        await expect(alertText).toEqual('Sign up successful.');
        // chaiExpect(alertText).to.have.property('Sign up successful.')
    });
});