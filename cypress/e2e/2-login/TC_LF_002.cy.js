describe('Login Functionality',()=> {
    it(' Validate logging into the Application using invalid credentials ',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-email').type('xyzabc123@gmail.com')
    cy.get('#input-password').type('xyzabc123')
    cy.get('#form-login > .btn').click()
    })
})