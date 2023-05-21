describe('Register Functionality',()=> {
    it('Validate different ways of navigating to "Register Account" page',()=> {
        cy.visit('/')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('.card-body > .btn').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=account/register&language=en-gb"]').click()
        //cy.get('.card-body > .btn').click()

    })

})