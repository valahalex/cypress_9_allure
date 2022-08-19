class WhiteListPage {
    elements = {
        betteLabel: ()=> cy.xpath('//span[text()="Better cloud storage, for less."]'),
        joinBtn: ()=> cy.xpath('//main/div[1]/div/div[1]/div[2]/div/a'),
        joinLabel: ()=> cy.xpath('//span[text()="Join the waitlist to try Telnyx Storage"]'),
    }

    clickJoinBtn() {
        this.elements.joinBtn().click();
    }
}
module.exports = new WhiteListPage();