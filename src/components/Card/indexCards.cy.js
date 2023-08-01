import React from 'react'
import Cards from './index'

describe('<Cards />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cards />)
  })
})