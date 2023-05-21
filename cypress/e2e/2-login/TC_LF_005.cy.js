describe('Login Functionality',()=> {
    it('Validate logging into the Application without providing any credentials' ,()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-email').invoke('val', '')
    cy.get('#input-password').type('{backspace}')
    cy.get('#form-login > .btn').click()
    })
})