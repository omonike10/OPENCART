describe('add to cart Functionality',()=> {
    it('Validate adding the product to Cart from "Product Display" Page',()=> {
    cy.visit('/') 
    cy.get(':nth-child(1) > form > .product-thumb > .image > a > .img-fluid').click()
    cy.get('#button-cart')
    .click()
    .should('have.text','Add to Cart')
cy.get('#alert').should('have.text',' Success: You have added MacBook to your shopping cart! ')
    })
})