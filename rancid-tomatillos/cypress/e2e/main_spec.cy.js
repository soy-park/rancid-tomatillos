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
    it('should display a title', () => {
      cy.contains('h1', 'Rancid Tomatillos');
    });
  });

  it('should display all movies', () => {
    cy.get('img').should("be.visible")
      .get('img').should("have.length", 4);
  });

  it('should render a specific moives details once clicked', () => {
    cy.get('img').first().click()
      .get('.single-movie-info');
  });

  it('should show an error message', () => {
    {
      cy.intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
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
