describe('Login Functionality',()=> {
    it('Validate adding the product to Cart from "Wish List" Page',()=> {
    cy.visit('/') 
  cy.xpath('//*[@id="content"]/div[2]/div[1]/form/div/div[2]/div[2]/button[2]').click()
 cy.get('#alert').click()
  .should('have.text',' You must login or create an account to save MacBook to your wish list! ')
    })
})