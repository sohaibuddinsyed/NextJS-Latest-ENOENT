describe('Basic App Test', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('Next.js')
  })
})
