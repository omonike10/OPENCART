describe('forgot password Functionality',()=> {
    it('Validate User is able to reset the password',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-email').type('pavanoltraining@gmail.com')
    cy.get('#form-login > :nth-child(4) > a').click()
    })
})