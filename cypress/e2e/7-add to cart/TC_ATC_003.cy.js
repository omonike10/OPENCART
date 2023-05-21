describe('Login Functionality',()=> {
    it('Validate adding the product to Cart from "compare product" Page',()=> {
    cy.visit('/') 
  cy.xpath('//*[@id="content"]/div[2]/div[1]/form/div/div[2]/div[2]/button[3]/i').click()
 cy.get('#alert').click()
  .should('have.text',' Success: You have added MacBook to your product comparison! ')
    })
})