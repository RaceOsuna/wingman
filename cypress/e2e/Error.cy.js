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
      cy.get('a').should('be.visible').should('have.text', "🔄 Return Home")
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
      cy.get('a').should('be.visible').should('have.text', "🔄 Return Home")

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
      cy.get('a').should('be.visible').should('have.text', "🔄 Return Home")

  })

  it('should beable to return to the home page', () => {
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
      cy.get('a').should('be.visible').should('have.text', "🔄 Return Home")

      cy.get('a').click()

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