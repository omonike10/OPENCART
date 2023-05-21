describe('Search Functionality',()=> {
    it('Validate searching with a non existing Product Name',()=> {
    cy.visit('/') 
    cy.get('.form-control').type('Fitbit')
    cy.get('#search > .btn').click()
    })
})