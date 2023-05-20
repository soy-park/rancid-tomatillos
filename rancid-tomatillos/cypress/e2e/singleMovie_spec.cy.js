describe('Single Movie Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 200 })
      .get('img').first().click()
      .get('.single-movie-info')
  });

  it('should see a single movie info displayed', () => {
      cy.contains('h2', 'Black Adam')
        .get('.movie-info').contains('Runtime: 125 min');
  });

  it('should be able to go back to the main menu', () => {
      cy.get('button').click()
        .get('.movies-container');
  });
});