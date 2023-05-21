describe('forgot password Functionality',()=> {
    it('Validate the Password Reset functionality in all the supported environments',()=> {
    cy.visit('/') 
    cy.get(':nth-child(2) > .dropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=account/forgotten&language=en-gb"]').click()
    cy.get('.float-end > .btn')
    .click()
    .should('have.text','Continue')
    cy.get('.alert').should('have.text',' Warning: The E-Mail Address was not found in our records! ' )
    })
})