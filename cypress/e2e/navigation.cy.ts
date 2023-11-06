describe('Navigation check', () => {
    it('Default page is Home', () => {
        cy.visit('http://localhost:5173/')
        cy.get('h1').should('contain.text', 'Home')
    })
})
