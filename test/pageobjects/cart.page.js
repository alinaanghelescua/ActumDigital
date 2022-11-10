const Page = require('./page');

class Cart extends Page{
    get item() {
        return $$('.card-title a');
    };
    get addToCartBtn() {
        return $('.product-content .btn');
    };
    get cartBtn() {
        return $('#cartur');
    };
    get placeOrderBtn() {
        return $('#page-wrapper button');
    };
    // checkout form data
    get checkoutNameField() {
        return $('#name');
    };
    get checkoutCountryField() {
        return $('#country');
    };
    get checkoutCityField() {
        return $('#city');
    };
    get checkoutCrediCardField() {
        return $('#card');
    };
    get checkoutMonthField() {
        return $('#month');
    };
    get checkoutYearField() {
        return $('#year');
    };
    get checkoutBtn() {
        return $('[onclick="purchaseOrder()"]');
    };
    // confirmation alert
    get confirmationAlert() {
        return $('.sweet-alert');
    }

    async selectItemMethod(index) {
        await this.item[index].click();
    };
    async addToCartMethod() {
        await this.addToCartBtn.click();
    };
    async openCartMethod() {
        await this.cartBtn.click();
    };
    async placeOrderMethod() {
        await this.placeOrderBtn.click();
    };
    async checkoutOrderMethod() {
        await this.checkoutNameField.setValue('Nume');
        await this.checkoutCountryField.setValue('Romania');
        await this.checkoutCityField.setValue('Sibiu');
        await this.checkoutCrediCardField.setValue('1234123412341234');
        await this.checkoutYearField.setValue('2025');
        await this.checkoutMonthField.setValue('08');
        await this.checkoutBtn.click();
    };

    


};


module.exports = new Cart();