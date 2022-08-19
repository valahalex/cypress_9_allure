class SupportCenterPage {
    elements = {
        header: ()=> cy.xpath('//h1'),
    }
}
module.exports = new SupportCenterPage();