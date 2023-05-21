describe('Register Functionality',()=> {
    it('Validate "Register Account" functionality in all the supported environments',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    })
})