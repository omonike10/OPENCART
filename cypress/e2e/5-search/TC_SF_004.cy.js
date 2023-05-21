describe('Search Functionality',()=> {
    it('Validate searching for a product after login to the Application',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-email').type('pavanoltraing@gmail.com')
    cy.get('#input-password').type('12345')
    cy.get('#form-login > .btn').click()
    cy.get('#search > .form-control')
    .type('iMac')
    .get('#search > .btn')
    .click()
    })
})