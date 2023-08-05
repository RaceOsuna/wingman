describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

    cy.intercept('GET', 'https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3', {
      statusCode: 200,
      fixture: 'news'
    }).as('news')

    cy.intercept('GET', 'https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=daltoosh&platform=PC', {
        statusCode: 200,
        fixture: 'stats'
      }).as('stats')

    cy.wait('@news')
    cy.get('button[value="PC"]').click()
    cy.get('input[name="username"]').type("daltoosh")
    cy.get('a[name=submit]').click()
    cy.wait('@stats')
    cy.url().should('eq', 'http://localhost:3000/daltoosh')
  })

  it('Should be able to log out and return to the home page', () => {
    cy.get('[href="/"]').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.form-container').within(() => {
      cy.contains('h1', 'Wingman').should('be.visible')
      cy.contains('button', 'PC').should('be.visible')
      cy.contains('button', 'XBOX').should('be.visible')
      cy.contains('button', 'PSN').should('be.visible')
      cy.contains('p', 'Login').should('be.visible')
      cy.get('input[name="username"]').should('be.visible').should('have.value', '')
    })
  })
})