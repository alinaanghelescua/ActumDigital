const HomePage = require('../pageobjects/homePage.page');
const Categories = require('../pageobjects/categories.page');

describe('Verify Categories', () => {
    before(async () => {
        await HomePage.open();
    });

    it('Verify phones category', async() => {
        // await Categories.phones();
        await expect(Categories.phonesElement).toHaveText('Phones');
    });
    it('Verify notebooks category', async () => {
        await expect(Categories.notebooksElement).toHaveText('Laptops');
    });
    it('Verify notebooks category', async () => {
        await expect(Categories.monitorsElements).toHaveText('Monitors');
    });
    
});
