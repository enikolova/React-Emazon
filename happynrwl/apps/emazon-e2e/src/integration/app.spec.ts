import { getGreeting } from '../support/app.po';

describe('emazon', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to emazon!');
  });
});
