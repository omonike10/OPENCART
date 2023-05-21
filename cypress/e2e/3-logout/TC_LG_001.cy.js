describe('logout Functionality',()=> {
    it('Validate Logging out by selecting Logout option from "My Account" dropmenu',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-email').type('pavanoltraining@gmail.com')
    cy.get('#input-password').type('12345')
    cy.get('#form-login > .btn').click()
    })
})