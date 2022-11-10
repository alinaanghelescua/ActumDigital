class LogoutPage {
    get logoutBtn() {
        return $('#logout2');
    };

    async logoutMethod() {
        await this.logoutBtn.click();
    };
};

module.exports = new LogoutPage();