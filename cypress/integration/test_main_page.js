const mainPage = require('../pages/main.page.js');
const supportCenterPage = require('../pages/support_center.page.js');
const loginPage = require('../pages/log_in.page.js');
const white_listPage = require('../pages/white_list.page.js');
const talkPage = require('../pages/talk.page.js');

describe('test button on main page', () => {

    beforeEach(()=> {
      cy.visit('/');
    });

    it('See if the label will appear when call us button click', () => {
      mainPage.clickGreenBtn();
      mainPage.clickCallUsBtn();
      mainPage.elements.callMenu().should('be.visible');
    });

    it('See if the support center button is working', ()=> {
      mainPage.clickSupportCenterBtn();
      supportCenterPage.elements.header().should('contain.text', 'Support Center');
      cy.url().should('include', '/support.telnyx.com/')
    });

    it('See if the log in button is working', ()=> {
      mainPage.clickLogInBtn();
      loginPage.elements.loginLabel().should('contain.text', 'Log in');
      cy.url().should('include', '/login/sign-in');
    });

    it('See if the join white list button is working', ()=> {
      mainPage.clickWhiteListBtn();
      white_listPage.elements.betteLabel().should('be.visible');
      white_listPage.clickJoinBtn();
      white_listPage.elements.joinLabel().should('contain.text', 'Join the waitlist to try Telnyx Storage');
    });

    it('See if the talk button is working', ()=> {
      mainPage.clickTalkBtn();
      talkPage.elements.label().should('be.visible');
      cy.url().should('include', '/contact-us');
    });
});