describe('Login Functionality',()=> {
    it('Validate adding the product "previous" key from Product Display Page',()=> {
    cy.visit('/') 
    cy.get(':nth-child(1) > form > .product-thumb > .image > a > .img-fluid').click()
    cy.get('[href="https://demo.opencart.com/image/cache/catalog/demo/macbook_3-800x800.jpg"] > .img-thumbnail').click()
    cy.get('.mfp-arrow-left').click()
    .click()
    .click()
    .click()
    .click()
    cy.get('.mfp-close').click()
    cy.get('.fa.fa-home').click()
    })
})