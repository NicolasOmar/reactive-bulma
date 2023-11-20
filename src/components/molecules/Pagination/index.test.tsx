import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Pagination from '.'
// TYPES & INTERFACES
import { PaginationProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

const createTestPages = (numberOfPages = 3) => {
  const testPages = Array(numberOfPages)
    .fill(null)
    .map((_, i) => ({ text: `${++i}` }))
  const testValues = testPages.map((_, i) => (++i).toString())

  return { testPages, testValues }
}

describe('Pagination', () => {
  const { basicTestId, testClasses, customNavigationButtons } = testing
  const { testPages, testValues } = createTestPages(5)

  test('Should render the component', () => {
    const { testPages, testValues } = createTestPages()
    render(<Pagination pages={testPages} />)
    const testPagination = screen.getByTestId(basicTestId)

    expect(testPagination).toBeInTheDocument()
    testValues.forEach(stringValue =>
      expect(screen.getByText(stringValue)).toBeInTheDocument()
    )
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PaginationProps = {
        pages: testPages,
        [name]: value
      }

      render(<Pagination {...classTestObject} />)

      const testStylingPropValuePaginationGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePaginationGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the component with ellipsis and less items', () => {
    const ellipsisConfig = {
      pages: testPages,
      hasEllipsis: true,
      ellipsisItems: 1
    }
    const modifiedTestValues = testValues.filter(
      (_value, i) => i !== 1 && i !== --testValues.length
    )

    render(<Pagination {...ellipsisConfig} />)

    modifiedTestValues.forEach(stringValue =>
      expect(screen.getByText(stringValue)).toBeInTheDocument()
    )
  })

  test('Should render the component with other navigation buttons', () => {
    const navigationConfig = {
      pages: testPages,
      showPreviousPageButton: customNavigationButtons[0],
      showNextPageButton: customNavigationButtons[1]
    }

    render(<Pagination {...navigationConfig} />)

    customNavigationButtons.forEach(({ text }) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    )
  })

  test('Should render the component with no navigation buttons', () => {
    const { testPages } = createTestPages(5)
    const navigationConfig = {
      pages: testPages,
      showPreviousPageButton: null,
      showNextPageButton: null
    }

    render(<Pagination {...navigationConfig} />)
    const testPagination = screen.getByTestId(basicTestId)
    expect(testPagination).toBeInTheDocument()
    customNavigationButtons.forEach(({ text }) =>
      expect(() => screen.getByText(text)).toThrow()
    )
  })
})
