const HomePage = require('../pageobjects/homePage.page');
const LoginPage = require('../pageobjects/login.page');
const Cart = require('../pageobjects/cart.page');

describe('Cart', () => {
    before(async () => {
        await HomePage.open();
        await LoginPage.loginValid();
    });

    it('Access item details page', async() => {
        await browser.pause(2000);
        await Cart.selectItemMethod(0);
        await expect(browser).toHaveUrlContaining('prod');
    });
    it('Add item to cart', async () => {
        await Cart.addToCartMethod();
        await browser.execute('window.alert()');
        await browser.pause(3000);
        console.log(browser.isAlertOpen());
        await browser.pause(3000);
        await browser.acceptAlert();

        const alertText = await browser.getAlertText();
        console.log(alertText);
        await expect(alertText).toEqual('Product added.');
    });
    it('Open cart page', async() => {
        await Cart.openCartMethod();
        await expect(browser).toHaveUrlContaining('cart');
    });
    it('Checkout item', async() => {
        await Cart.placeOrderMethod();
        await browser.pause(3000);
        await Cart.checkoutOrderMethod();
        await expect(Cart.confirmationAlert).toBeDisplayed();
        await expect(Cart.confirmationAlert).toHaveTextContaining('Thank you for your purchase!');
    });
    
});
