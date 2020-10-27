describe('Add to cart, change quantity and remove from cart', () => {
  it('navigates to the website!', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to The Random Shoe Outlet!');
    cy.get('[data-cy=header-link-product-list]').click();
    cy.contains('Our shoes');
    cy.get('[data-cy=product-image]').should('be.visible');
    cy.get(':nth-child(3) > [data-cy=product-image]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.include('shoes/3');
    });
    cy.get('[data-cy="add-to-bag-button"]').click();
    cy.get('[data-cy="bag-icon"]').contains('1').click();
    cy.contains('Your Shopping Bag');
    cy.get('[data-cy="increase-button"]').click();
    cy.visit('http://localhost:3000/shopping-bag');
    cy.get('[data-cy="total"]').contains('2');
    cy.get('[data-cy="delete-button"]').click();
    cy.visit('http://localhost:3000/shopping-bag');
    cy.contains('Your Shopping Bag is empty');
    cy.get('[data-cy="bag-icon"]').should('be.empty');
  });
});
