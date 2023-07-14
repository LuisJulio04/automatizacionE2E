describe('Flujo de compra en saucedemo.com', () => {
  it('Realiza una compra', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('.inventory_item').eq(0).find('.btn_primary').click()
    cy.get('.inventory_item').eq(1).find('.btn_primary').click()

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Luis')
    cy.get('[data-test="lastName"]').type('Julio')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
  })
})
