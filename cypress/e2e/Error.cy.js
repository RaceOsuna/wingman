describe('error messages', () => {

  it('should display 500 level error messages', () => {
    cy.visit('http://localhost:3000/')

    cy.intercept('GET', 'https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3', {
      statusCode: 200,
      fixture: 'news'
    }).as('news')

    cy.intercept('GET', 'https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=daltooshhhhh&platform=PC', {
        statusCode: 500,
        fixture: 'stats'
      }).as('stats')

      cy.get('button[value="PC"]').click()
      cy.get('input[name="username"]').type("daltooshhhhh")
      cy.get('a[name=submit]').click()
      cy.wait('@stats')

      cy.get('h1').should('be.visible').should('have.text', "500")
      cy.get('h2').should('be.visible').should('have.text', "Oops! Nevermind. The server is down...")

  })


  it('should display 400 level error messages', () => {
    cy.visit('http://localhost:3000/')

    cy.intercept('GET', 'https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3', {
      statusCode: 200,
      fixture: 'news'
    }).as('news')

    cy.intercept('GET', 'https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=daltooshhhhh&platform=PC', {
        statusCode: 404,
        fixture: 'stats'
      }).as('stats')

cy.wait('@news')
      cy.get('button[value="PC"]').click()
      cy.get('input[name="username"]').type("daltooshhhhh")
      cy.get('a[name=submit]').click()
      cy.wait('@stats')

      cy.get('h1').should('be.visible').should('have.text', "404")
      cy.get('h2').should('be.visible').should('have.text', "Oops! Nevermind. This page doesn't exist...")

  })

  it('should display 300 level error messages', () => {
    cy.visit('http://localhost:3000/')

    cy.intercept('GET', 'https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3', {
      statusCode: 200,
      fixture: 'news'
    }).as('news')

    cy.intercept('GET', 'https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=daltooshhhhh&platform=PC', {
        statusCode: 300,
        fixture: 'stats'
      }).as('stats')

    cy.wait('@news')
      cy.get('button[value="PC"]').click()
      cy.get('input[name="username"]').type("daltooshhhhh")
      cy.get('a[name=submit]').click()
      cy.wait('@stats')

      cy.get('h1').should('be.visible').should('have.text', "300")
      cy.get('h2').should('be.visible').should('have.text', 'Oops! Nevermind. This page has been moved...')
  })
})