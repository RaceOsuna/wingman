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
  })

  it('Should be able to view the home page', () => {
    cy.wait('@news')

    cy.get('.form-container').within(() => {
      cy.contains('h1', 'Wingman').should('be.visible')
      cy.contains('button', 'PC').should('be.visible')
      cy.contains('button', 'XBOX').should('be.visible')
      cy.contains('button', 'PSN').should('be.visible')
      cy.contains('p', 'Submit').should('be.visible')
      cy.get('input[name="username"]').should('be.visible').should('have.value', '')
    })
  })

    it('Should be able to login and view a players stats', () => {
      cy.wait('@news')
      cy.get('button[value="PC"]').click()
      cy.get('input[name="username"]').type("daltoosh")
      cy.get('a[name=submit]').should('be.visible')
      cy.get('a[name=submit]').click()
      cy.wait('@stats')
      cy.url().should('eq', 'http://localhost:3000/daltoosh')

      cy.get('.app-header').within(() => {
        cy.get('div > h1').should('be.visible').should('have.text', 'Wingman')
        cy.get('[href="/"]').should('be.visible').should('have.text', 'New User')
        cy.get('[href="/daltoosh"]').should('be.visible').should('have.text', 'Stats')
        cy.get('[href="/daltoosh/legends"]').should('be.visible').should('have.text', 'Legends')
        cy.get('[href="/daltoosh/news"]').should('be.visible').should('have.text', 'News')
      })

      cy.get('.player-profile').within(() => {
        cy.get('img[src="https://secure.download.dm.origin.com/production/avatar/prod/1/599/416x416.JPEG"]').should('be.visible')
        cy.get('.name-avatar > h1').should('be.visible').should('have.text', 'Toosh Tees Off')
        cy.get('.status').should('be.visible').should('have.text', 'offline')
        cy.get('img[src="https://api.mozambiquehe.re/assets/icons/pathfinder.png"]').should('be.visible')
        cy.get('.rank-details > :nth-child(1)').should('be.visible').should('have.text', 'Legend: Pathfinder')
        cy.get('.rank-details > :nth-child(2)').should('be.visible').should('have.text', 'Rank: Master')
        cy.get('.rank-details > :nth-child(3)').should('be.visible').should('have.text', 'LP: 124,148')
        cy.get('.rank-details > :nth-child(4)').should('be.visible').should('have.text', 'Total Kills: 73,765')
        cy.get('.rank-details > :nth-child(5)').should('be.visible').should('have.text', 'Total Damage: 9,954,011')
      })
    })
})