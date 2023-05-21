describe('Login Functionality',()=> {
    it('Validate "Forgotten Password" link is available in the Login page and is working  ',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#form-login > :nth-child(4) > a').click()
    })
})