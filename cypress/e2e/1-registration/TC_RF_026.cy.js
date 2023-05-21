describe('Register Functionality',()=> {
    it('Validate the UI of the "Register Account" page',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    })
})