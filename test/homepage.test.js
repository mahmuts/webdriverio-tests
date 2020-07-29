const homepage = require('../pages/homepage.js')

describe('home page interactions', function() {
    it('verify header', function() {
        browser.url('https://www.freshworks.com/eu/');
        let text = homepage.pageHeader.getText();

        expect(text).to.include('software')
    })
})