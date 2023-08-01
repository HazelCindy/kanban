import React from 'react'
import HomeDesktop from './HomeDesktop'

describe('<HomeDesktop />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomeDesktop />)
  })
})