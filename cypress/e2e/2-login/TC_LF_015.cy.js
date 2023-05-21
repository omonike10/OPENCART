describe('Login Functionality',()=> {
    it('Validate the Password is not visible in the Page Source' ,()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#input-password').type('x86655')
    cy.get('#form-login > .btn').click()
    })
})