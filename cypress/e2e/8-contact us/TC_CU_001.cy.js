describe('contact us Functionality',()=> {
    it('Validate navigating to "Contact Us" page from Footer options',()=> {
    cy.visit('/') 
cy.xpath('/html/body/footer/div/div/div[2]/ul/li[1]/a').click()
cy.get('#input-name').type('Omonike')
cy.get('#input-email').type('yusufomonike@gmail.com')
cy.get('#input-enquiry').type('what are your opening hour?')
cy.get('button[type="submit"]').click()
.should('have.text','Submit')
cy.get('#content > p').click()
.should('have.text','Your enquiry has been successfully sent to the store owner!')
    })
})