describe('View News', () => {
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

  it('Should be able to view the lates Apex Legends news', () => {
    cy.get('[href="/daltoosh/news"]').click()
    cy.url().should('eq', 'http://localhost:3000/daltoosh/news')

    cy.get('.news-card').should('have.length', 32)
    cy.get('.news-card').first().within(() => {
      cy.get('h4 > a').should('be.visible').should('have.text', 'Apex Legends™: July 2023 Ranked Dev AMA')
      cy.get('img[src="https://media.contentapi.ea.com/content/dam/apex-legends/common/r5-s18-launch-revexecution-cu-v01.png.adapt.crop16x9.431p.png"]').should('be.visible')
      cy.get('p').should('be.visible').should('have.text', 'Catch-up on the dev team’s Ranked AMA on r/ApexLegends from July 21, 2023.')
    })
    cy.get('.news-card').last().within(() => {
      cy.get('h4 > a').should('be.visible').should('have.text', 'Enter a New Arena in the Thrillseekers Event')
      cy.get('img[src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/apex-thrillseekers-featured-image.jpg.adapt.crop16x9.431p.jpg"]').should('be.visible')
      cy.get('p').should('be.visible').should('have.text', 'Crank it up a notch with a new Arenas map, weekly rewards tracks, and splashy new looks when the Thrillseekers event begins on 7/13/21.')
    })
  })

  // it('Should be able to click on a news card and be taken to the arcticle', () => {
  //   cy.get('[href="/daltoosh/news"]').click()
  //   cy.url().should('eq', 'http://localhost:3000/daltoosh/news')

  //   cy.get('.news-card:nth-child(7) > h4').click()
  //   cy.url().should('eq', 'https://www.ea.com/games/apex-legends/news/threat-level-event')
  // })
})