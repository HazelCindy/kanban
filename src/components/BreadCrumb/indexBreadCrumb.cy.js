import React from 'react'
import BreadCrumb from './index'

describe('<BreadCrumb />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BreadCrumb />)
  })
})