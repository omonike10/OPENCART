describe('Login Functionality',()=> {
    it('Validate adding the product "next" key from Product Display Page using xpath',()=> {
    cy.visit('/') 
    cy.xpath('//*[@id="content"]/div[2]/div[1]/form/div/div[1]/a/img').click()
    cy.xpath('//*[@id="content"]/div[1]/div[1]/div/div/a[1]/img').click()
    cy.xpath('/html/body/div[2]/div/button[2]').click()
    .click()
    .click()
    .click()
    .click()
    cy.get('button[title="Close (Esc)"]').click()
    cy.get('.fa').click()
    })
})