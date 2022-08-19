class TalkPage {
    elements = {
        label: ()=> cy.xpath('//span[text()="Talk to an expert"]'),
    }
}
module.exports = new TalkPage();