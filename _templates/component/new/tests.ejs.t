---
to: <%= fileRoute %>.test.tsx
---
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import <%= name %> from '.'
// TYPES & INTERFACES
import { <%= name %>Props } from '../../../interfaces/<%= route %>Props'
// MOCKS
import { testing } from './index.mocks.json'

describe('<%= name %>', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<<%= name %> />)
    const test<%= name %> = screen.getByTestId(basicTestId)
    expect(test<%= name %>).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: <%= name %>Props = {
        [name]: value
      }

      render(<<%= name %> {...classTestObject} />)

      const testStylingPropValue<%= name %>Group = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValue<%= name %>Group.className).toContain(result)
      cleanup()
    })
  })
})
