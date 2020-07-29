class HomePage{
    get pageHeader() { return $('h1') }
    get subText() { return $('.sub-text') }
    get supportLink() {return $('a[href = "/support/"]') }
}

module.exports = new HomePage();