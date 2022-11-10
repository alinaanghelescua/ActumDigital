const Page = require('./page');

class HomePage extends Page {
    async open() {
        await super.open('https://www.demoblaze.com/');
    };
};



module.exports = new HomePage();
