import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Pagination from '.'
// TYPES & INTERFACES
import { PaginationProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Pagination', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<Pagination />)
    const testPagination = screen.getByTestId(basicTestId)

    expect(testPagination).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PaginationProps = {
        [name]: value
      }

      render(<Pagination {...classTestObject} />)

      const testStylingPropValuePaginationGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePaginationGroup.className).toContain(result)
      cleanup()
    })
  })
})
