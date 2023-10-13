---
to: src/components/molecules/<%= name %>/index.test.tsx
---
<%
  CamelName = h.inflection.camelize(name, false)
  UnderName = h.inflection.underscore(name, false)
%>
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import <%= CamelName %> from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('<%= CamelName %>', () => {
  const { basicTestId } = testing

  test('Should render the component', () => {
    render(<<%= CamelName %> />)
    const test<%= CamelName %> = screen.getByTestId(basicTestId)
    expect(test<%= CamelName %>).toBeInTheDocument()
  })
})
