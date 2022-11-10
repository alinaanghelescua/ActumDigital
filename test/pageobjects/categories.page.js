const Page = require('./page');
 
 
 class Categories extends Page{
    get phonesElement() {
        return $('[onclick="byCat(\'phone\')"]');
    };
    get notebooksElement() {
        return $('[onclick="byCat(\'notebook\')"]');
    };
    get monitorsElements() {
        return $('[onclick="byCat(\'monitor\')"]');
    };


    async phones() {
        await this.phonesElement.click();
    };

 };

 module.exports = new Categories();