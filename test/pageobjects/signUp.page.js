const Page = require('./page');


class SignUp extends Page {
    get signUp() {
        return $('#signin2');
    };
    get usernameRegister() {
        return $('#sign-username');
    };
    get passwordRegister() {
        return $('#sign-password');
    };
    get signUpBtn() {
        return $('button[onclick="register()"]');
    };

    

    setUserName() {
        let userNameRandom = "user" + Date.now(); 
        return userNameRandom;
    };

    async signUpMethod() {       
        await this.signUp.click();
        await browser.pause(3000);
        await this.usernameRegister.setValue(this.setUserName());
        await this.passwordRegister.setValue('12345');
        await this.signUpBtn.click();

    };

};

module.exports = new SignUp();