const mainPage = require('../pages/main.page.js');
const productPage = require('../pages/product.page.js');

describe('Test button and filling pruducts page', ()=> {
    beforeEach(()=>{
        cy.visit('/');
    });

    it('See url and label of page after explore our products button clicked', ()=> {
        mainPage.clickGreenBtn();
        mainPage.clickExploreBtn();
        productPage.elements.lebel().should('be.visible');
        cy.url().should('include', '/products')
    });

    it('Test sms button work', ()=> {
        mainPage.clickExploreBtn();
        productPage.elements.smsBtn().should('be.visible');
        productPage.clickSmsBtn();
        productPage.elements.smsLabel().should('be.visible');
        productPage.elements.smsLabel().should('contain', 'SMS API')
        cy.url().should('include', '/sms-api')
    });

    it('Test mms button work', ()=> {
        mainPage.clickExploreBtn();
        productPage.elements.mmsBtn().should('be.visible');
        productPage.clickMmsBtn();
        productPage.elements.mmsLabel().should('be.visible');
        productPage.elements.mmsLabel().should('contain', 'MMS API')
        cy.url().should('include', '/mms-api');
    });

    it('Test a2p new button work', ()=> {
        mainPage.clickExploreBtn();
        productPage.elements.a2pBtn().should('be.visible');
        productPage.clickA2pBtn();
        productPage.elements.a2pLebal().should('be.visible');
        productPage.elements.a2pLebal().should('contain', 'A2P 10DLC Registration');
        cy.url().should('include', '/10dlc-registration');
    });

    it('Test Alphanumeric Sender ID new button work', ()=> {
        mainPage.clickExploreBtn();
        productPage.elements.alphaBtn().should('be.visible');
        productPage.clickAlphaBtn();
        productPage.elements.alphaLabel().should('be.visible');
        productPage.elements.alphaLabel().should('contain', 'Build a brand and improve trust with Alphanumeric Sender IDs.');
        cy.url().should('include', '/alphanumeric-sender-id');
    });
});