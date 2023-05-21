describe('Login Functionality',()=> {
    it('Validate the different ways of navigating to the Login page',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=account/login&language=en-gb"]').click()
    cy.get('.breadcrumb > :nth-child(3) > a').click()
    })
})