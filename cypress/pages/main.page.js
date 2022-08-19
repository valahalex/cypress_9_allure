class MainPage {
    elements = {
        callUsBtn: ()=> cy.xpath('//button[text()="Call Us"]'),
        greenBtn: ()=> cy.xpath('//button[text()="Accept and close"]'),
        callMenu: ()=> cy.xpath('//*[@id="telnyx-click2call-dialog"]/div/div'),
        supportCenterBtn: ()=> cy.xpath('//*[@id="__next"]/div[1]/header/div[1]/div/div/a[1]'),
        logInBtn: ()=> cy.xpath('//*[@id="__next"]/div[1]/header/div[1]/div/div/a[2]'),
        whiteListBtn: ()=> cy.xpath('//a[text()="JOIN THE WAITLIST."]'),
        talkBtn: ()=> cy.xpath('//header/div[2]/div/ul[2]/li[1]/div/a'),
        exploreBtn: ()=> cy.xpath('//a[text()="Explore our products"]'),
        resourceHubBtn: ()=> cy.xpath('//span[text()="Resource Hub"]'),
    }

    clickResourceHubBtn() {
        this.elements.resourceHubBtn().click();
    }

    clickExploreBtn() {
        this.elements.exploreBtn().click();
    }

    clickTalkBtn() {
        this.elements.talkBtn().click();
    }

    clickWhiteListBtn() {
        this.elements.whiteListBtn().click();
    }

    clickLogInBtn() {
        this.elements.logInBtn().click();
    }

    clickGreenBtn() {
        this.elements.greenBtn().click();
    }

    clickCallUsBtn() {
        this.elements.callUsBtn().click();
    }

    clickSupportCenterBtn() {
        this.elements.supportCenterBtn().click();
    }

}
module.exports = new MainPage();