describe('contact us Functionality',()=> {
    it('Validate navigating to "Returns" page from Footer options',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > a').click()
    cy.get('#input-firstname').type('Tosin')
    cy.get('#input-lastname').type('Awe')
    cy.get('#input-email').type('awetosin@gmail.com')
    cy.get('#input-telephone').type('07064453423')
    cy.get('#input-order-id').type('12345')
    cy.get('#input-date-ordered').clear().type('2023-05-02')
    cy.get('#input-product').type('IMac')
    cy.get('#input-model').type('54321')
    cy.get('#input-quantity').clear().type('3')
    cy.get('#input-return-reason-1').click()
    cy.get('#input-opened-no').click()
    cy.get('#input-comment').type('Dead On Arrival')
    cy.get('button[type="submit"]').click()
    })
})