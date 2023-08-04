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
  
  it('Should be able to view all legends', () => {
    cy.get('[href="/daltoosh/legends"]').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/legends')
    cy.get('input[name="legends"]').should('be.visible').should('have.value', '')
    cy.get('.legend-container').within(() => {
      cy.get('.legend-card').should('have.length', 24)
      cy.get('.legend-card').first().within(() => {
        cy.get('a > h1').should('be.visible').should('have.text', 'Revenant')
        cy.get('a > .legend-card-icon > img[src="https://api.mozambiquehe.re/assets/icons/revenant.png"]').should('be.visible')
      })
      cy.get('.legend-card').last().within(() => {
        cy.get('a > h1').should('be.visible').should('have.text', 'Ballistic')
        cy.get('a > .legend-card-icon > img[src="https://api.mozambiquehe.re/assets/icons/ballistic.png"]').should('be.visible')
      })
    })
  })

  it('Should be able to search legends by name', () => {
    cy.get('[href="/daltoosh/legends"]').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/legends')
    cy.get('input[name="legends"]').type('fu')
    cy.get('.legend-card').should('have.length', 1)
    cy.get('.legend-card').first().within(() => {
      cy.get('a > h1').should('be.visible').should('have.text', 'Fuse')
      cy.get('a > .legend-card-icon > img[src="https://api.mozambiquehe.re/assets/icons/fuse.png"]').should('be.visible')
    })
  })

  it('Should be able to click on a lengend to view the legends profile and then go back to viewing all legends ', () => {
    cy.get('[href="/daltoosh/legends"]').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/legends')
    cy.get('.legend-card:nth-child(3)').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/Horizon')

    cy.get('.legend-profile').within(() => {
      cy.get('.profile > img[src="https://api.mozambiquehe.re/assets/banners/horizon.jpg"]').should('be.visible')
      cy.contains('p', 'Kills: 712').should('be.visible')
      cy.contains('p', 'Top Percentile: 16%').should('be.visible')
    })

    cy.get('[href="/daltoosh/legends"]').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/legends')
  })
})