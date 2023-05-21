describe('Register Functionality',()=> {
    it('Validate Registering an Account',()=> {
    cy.visit('/')  
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('#input-firstname').type('Tosin')
    cy.get('#input-lastname').type('Awe')
    cy.get('#input-email').type('tosinawe@gmail.com')
    cy.get('#input-password').type('tosin12345')
    cy.get('#input-newsletter-yes').click()
    cy.get('.float-end > .form-check > .form-check-input').click()
    cy.get('.float-end > .btn').click()
 
    
    })
})