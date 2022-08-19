class ResourcePage {
    elements = {
        Label: ()=> cy.xpath('//h1'),
        smsBtn: ()=> cy.xpath('//h3[text()="SMS Guide"]/../..'),
        opBtn: ()=> cy.xpath('//h3[text()="VoIP Guide"]/../..'),
        trunkBtn: ()=> cy.xpath('//h3[text()="SIP Trunk Guide"]/../..'),
        rtcBtn: ()=> cy.xpath('//h3[text()="WebRTC Guide"]/../..'),
        iotBtn: ()=> cy.xpath('//h3[text()="IoT Guide"]/../..'),
    }

    clickIotBtn() {
        this.elements.iotBtn().click();
    }

    clickRtcBtn() {
        this.elements.rtcBtn().click();
    }

    clickTrunkBtn() {
        this.elements.trunkBtn().click();
    }

    clickOpBtn() {
        this.elements.opBtn().click();
    }

    clickSmsBtn() {
        this.elements.smsBtn().click();
    }
}
module.exports = new ResourcePage();