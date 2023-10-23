import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Breadcrumbs from '.'
// TYPES & INTERFACES
import { BreadcrumbsProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'
import breacrumbItemMocks from '../../atoms/BreadcrumbItem/index.mocks.json'

const breadcrumbItems = Array(5)
  .fill(null)
  .map((_, i) => ({
    text: breacrumbItemMocks.testing.testText,
    isActiveItem: i === 4
  }))

describe('Breadcrumbs', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<Breadcrumbs items={breadcrumbItems} />)
    const testBreadcrumbs = screen.getByTestId(basicTestId)
    expect(testBreadcrumbs).toBeInTheDocument()
    const testItems = screen.getAllByText(breacrumbItemMocks.testing.testText)
    expect(testItems.length).toBe(5)
  })

  test('Should render the breadcrumbs with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: BreadcrumbsProps = {
        items: breadcrumbItems,
        [name]: value
      }

      render(<Breadcrumbs {...classTestObject} />)

      const testClassColumnGroup = screen.getByTestId(testIdWithClass)
      expect(testClassColumnGroup.className).toContain(result)
      cleanup()
    })
  })
})
