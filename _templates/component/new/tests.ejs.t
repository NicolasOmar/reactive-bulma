---
to: <%= fileRoute %>.test.tsx
---
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import <%= name %> from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('<%= name %>', () => {
  const { basicTestId } = testing

  test('Should render the component', () => {
    render(<<%= name %> />)
    const test<%= name %> = screen.getByTestId(basicTestId)
    expect(test<%= name %>).toBeInTheDocument()
  })
})
