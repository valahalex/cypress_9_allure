class ProductPage {
    elements = {
        lebel: ()=> cy.xpath('//h1'),
        smsBtn: ()=> cy.xpath('//span[text()="SMS"]/../../../..'),
        smsLabel: ()=> cy.xpath('//h1/span[text()="SMS API"]'),
        mmsBtn: ()=> cy.xpath('//span[text()="MMS"]/../../../..'),
        mmsLabel: ()=> cy.xpath('//span[text()="MMS API"]'),
        a2pBtn: ()=> cy.xpath('//span[text()="A2P 10DLC"]/../../../..'),
        a2pLebal: ()=> cy.xpath('//span[text()="A2P 10DLC Registration"]'),
        alphaBtn: ()=> cy.xpath('//span[text()="Alphanumeric Sender ID"]'),
        alphaLabel: ()=> cy.xpath('//strong'),
    }

    clickAlphaBtn() {
        this.elements.alphaBtn().click();
    }

    clickA2pBtn() {
        this.elements.a2pBtn().click();
    }

    clickMmsBtn() {
        this.elements.mmsBtn().click();
    }

    clickSmsBtn() {
        this.elements.smsBtn().click();
    }
}
module.exports = new ProductPage();