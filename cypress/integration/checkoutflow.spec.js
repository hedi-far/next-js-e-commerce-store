describe('Checkout flow, payment page, thank you page', () => {
  it('navigates to the website!', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to The Random Shoe Outlet!');
    cy.get('[data-cy=header-link-product-list]').click();
    cy.contains('Our shoes');
    cy.get('[data-cy=product-image]').should('be.visible');
    cy.get(':nth-child(5) > [data-cy=product-image]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.include('shoes/5');
    });
    cy.get('[data-cy="add-to-bag-button"]').click();
    cy.get('[data-cy="bag-icon"]').contains('1');
    cy.get('[data-cy="add-to-bag-button"]').click();
    cy.get('[data-cy="bag-icon"]').contains('2').click();
    cy.contains('Your Shopping Bag');
    cy.get('[data-cy="decrease-button"]').click();
    cy.visit('http://localhost:3000/shopping-bag');
    cy.get('[data-cy="total"]').contains('1');
    cy.get('[data-cy="pay-now"]').click();
    cy.contains('Address (required)');
    cy.get('#fname').type('Martin Maier');
    cy.get('#email').type('maier@maier.de');
    cy.get('#adr').type('Doom Street 1821');
    cy.get('#zip').type('2045');
    cy.get('#city').type('Washington');
    cy.get('#cname').type('Visa');
    cy.get('#ccnum').type('25465654694565');
    cy.get('#expmonth').type('January');
    cy.get('#expyear').type('2022');
    cy.get('#cvv').type('123');
    cy.get('[data-cy="confirm-button"]').click();
    cy.contains('Thank you for your purchase.');
    cy.get('[data-cy="bag-icon"]').should('be.empty');
  });
});
