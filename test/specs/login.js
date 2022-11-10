const HomePage = require('../pageobjects/homePage.page');
const LoginPage = require('../pageobjects/login.page');
const LogoutPage = require('../pageobjects/logout.page');


// import SignUp from ('../pageobjects/signUp.page');

describe('Login', () => {
    before(async () => {
        await HomePage.open();
    });

    it('Login should be successful with valid credetials', async() => {
        await LoginPage.loginValid();
        await expect(LoginPage.nameOfUser).toHaveTextContaining('Welcome user');
    });
    it('Logout should be successful', async () => {
        await LogoutPage.logoutMethod();
        await expect(LoginPage.loginBtn).toBePresent();
    });
    it('Login should fail with invalid credentils', async () => {
        
    });
    
});