describe('Register Functionality',()=> {
    it('Validate proper notification messages',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('.float-end > .btn').click()
    })
})