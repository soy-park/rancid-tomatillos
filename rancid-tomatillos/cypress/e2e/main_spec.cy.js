describe('Main page', () => {

  beforeEach(() => {
    cy.fixture("movieData.json").as("movieData")
      .intercept('GET', 'http://localhost:3000', {
      statusCode: 200,
      fixture: "movieData"
      })
    .visit('http://localhost:3000')
  });

  it('should display a title', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  });

  it('should display all movies', () => {
    cy.get('img').should("be.visible")
  })
  // it('should see the Woman King info', () => {
  //   cy.intercept('POST', 'http://localhost:3000/724495')
  // })

});