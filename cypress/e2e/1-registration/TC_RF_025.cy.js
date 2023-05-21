describe('Register Functionality',()=> {
    it('Validate the Breadcrumb, Page Heading, Page URL, Page Title of "Register Account" Page ',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    })
})