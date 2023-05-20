describe('Main page', () => {

  beforeEach(() => {
    cy.fixture("movieData.json").as("movieData")
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        fixture: "movieData"
      })
      .visit('http://localhost:3000');
  });

  it('should display a title', () => {
    cy.contains('h1', 'Rancid Tomatillos');
  });

  it('should have a form searchbar that takes in a title', () => {
    cy.get(".search-field").type('woman').should('have.value', 'woman')
  });

  it('should see movies that match title in searchbar', () => {
    cy.get(".search-field").type('black')
      .get('.movieCard').each(($movieCard) => {cy.wrap($movieCard).find('img').should('be.visible')})
  });

  it('should be able to click on form button to return to main page', () => {
    cy.get('.button').click()
      .get('img').should("have.length", 4);
  });

  it('should display error message when no movies match title', () => {
    cy.get(".search-field").type('z')
      .get('h2').contains("Sorry, no movies match that title")
  });

  it('should display all movies', () => {
    cy.get('img').should("be.visible")
      .get('img').should("have.length", 4);
  });

  it('should render a specific movie details once clicked', () => {
    cy.get('img').first().click()
      .get('.single-movie-info');
  });

  it('should show an error message', () => {
    {
      cy.intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/mvies'
      },
        {
          statusCode: 500,
          body: {
            message: `Error`
          }
        })
      .visit('http://localhost:3000');
    }
  });
});
