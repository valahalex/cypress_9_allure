describe('empty spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.xpath('//input[@type="text"]').should('be.visible')
    })
  })