describe('Search Functionality',()=> {
    it('Validate Search using the text from the product description',()=> {
    cy.visit('/') 
    cy.get('.form-control')
    cy.get('#search > .btn').click()
    cy.get('#input-description').click()
    })
})