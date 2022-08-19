const mainPage = require('../pages/main.page.js');
const resourcePage = require('../pages/resource.page.js');

describe('Test learn page elements', ()=> {
    beforeEach(()=> {
        cy.visit('/');
    });

    it('Test resource button work', ()=> {
        mainPage.clickGreenBtn();
        mainPage.clickResourceHubBtn();
        resourcePage.elements.Label().should('be.visible');
        //resourcePage.elements.resourceLabel().should('contain', 'Resource Hub');
        //cy.url().should('contain', '/learn');
    });

    it('Test sms guide button link', ()=> {
        mainPage.clickResourceHubBtn();
        resourcePage.clickSmsBtn();
        resourcePage.elements.Label().should('contain', 'SMS | Complete Guide to Sending Text Messages');
        cy.url().should('contain', '/sms-guide');
    });

    it('Test op guide button link', ()=> {
        mainPage.clickResourceHubBtn();
        resourcePage.clickOpBtn();
        resourcePage.elements.Label().should('contain', 'VoIP | Complete Guide to Voice over Internet Protocol');
        cy.url().should('contain', '/voip-guide');
    });

    it('Test trunk button link', ()=> {
        mainPage.clickResourceHubBtn();
        resourcePage.clickTrunkBtn();
        resourcePage.elements.Label().should('contain', 'SIP Trunking | Complete Guide to Session Initiation Protocol');
        cy.url().should('contain', '/sip-trunk-guide');
    });

    it('Test iot button link', ()=> {
        mainPage.clickResourceHubBtn();
        resourcePage.clickIotBtn();
        resourcePage.elements.Label().should('contain', 'IoT | Complete Guide to the Internet of Things');
        cy.url().should('contain', '/iot-guide');
    });
})