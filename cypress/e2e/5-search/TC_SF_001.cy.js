describe('Search Functionality',()=> {
    it('Validate searching with an existing Product Name',()=> {
    cy.visit('/') 
    cy.get('.form-control').type('iMac')
    cy.get('#search > .btn').click()

    })
})