describe('contact us Functionality',()=> {
    it('Validate navigating to "List, Grid & Sort by" page from Footer options',()=> {
    cy.visit('/') 
    cy.get(':nth-child(6) > .nav-link').click()
    cy.get('#button-list').click()
    cy.get('#button-grid').click()
    cy.get('#input-sort').select('Name (Z - A)')
    })
})