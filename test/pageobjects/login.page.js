

const Page = require('./page');
const SignUp = require('./signUp.page');



class LoginPage extends Page {
    get loginBtn(){
        return $('#login2');
    };   
    get loginUsername() {
        return $('#loginusername');
    }
    get loginPassword() {
        return $('#loginpassword');
    };
    get btnSubmit() {
        return $('button[onclick="logIn()"]');
    };
    get nameOfUser() {
        return $('#nameofuser');
    }
  
    async loginValid() {
        await this.loginBtn.click();
        await browser.pause(3000);
        console.log(SignUp.setUserName);
        await this.loginUsername.setValue('user1668006411578');
        await this.loginPassword.setValue('12345');
        await this.btnSubmit.click();
    };

    async loginInvalid() {
        await this.loginBtn.click();
        await browser.pause(3000);
        console.log(SignUp.setUserName);
        await this.loginUsername.setValue('user1668006411578');
        await this.loginPassword.setValue('123453333');
        await this.btnSubmit.click();
    };
}

module.exports = new LoginPage();
