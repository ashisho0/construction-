
const navElements = ['Home', 'About Us', 'Contact Us'];

const checkNavElements = () => {
  for (let navElement of navElements) {
    cy.get('a').contains(navElement).should('be.visible');
  };
};

describe('navbar renders correctly and renders all the items on desktop', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-15');
  })

  it('checks if the navbar renders correctly with all items', () => {
    cy.get('#navbar').should('be.visible');
    checkNavElements();
  })
});

describe('navbar renders correctly and renders all the items on mobile', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-x')
  })

  it('checks if the navbar renders correctly with all items', () => {
    cy.get('#navbar').should('be.visible');
    cy.get('#menu-icon').should('be.visible').click();
    checkNavElements();
  })
})
