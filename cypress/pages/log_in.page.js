class LoginPage {
    elements = {
        loginLabel: ()=> cy.xpath('//div[text()="Log in"]')
    }
}
module.exports = new LoginPage();