describe('Search Functionality',()=> {
    it('Validate all the fields in the Search functionality and Search page have placeholders',()=> {
    cy.visit('/') 
   cy.get('input[placeholder="Search"]').click()
   cy.get('.fas.fa-search').click()
    })
})