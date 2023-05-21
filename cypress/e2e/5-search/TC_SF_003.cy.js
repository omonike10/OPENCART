describe('Search Functionality',()=> {
    it('Validate searching without providing any Product Name',()=> {
    cy.visit('/') 
    cy.get('.form-control')
    .get('#search > .btn')
    .click()
    })
})