import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import PaginationItem from '.'
// TYPES & INTERFACES
import { PaginationItemProps } from '@interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('PaginationItem', () => {
  const { basicTestId, testClasses, basicText } = testing

  test('Should render the component', () => {
    render(<PaginationItem {...basicText} />)
    const testPaginationItem = screen.getByTestId(basicTestId)

    expect(testPaginationItem).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PaginationItemProps = {
        ...basicText,
        [name]: value
      }

      render(<PaginationItem {...classTestObject} />)

      const testStylingPropValuePaginationItemGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePaginationItemGroup.className).toContain(
        result
      )
      cleanup()
    })
  })

  test('Should check that the item has been clicked', () => {
    const clickeableConfig = {
      ...basicText,
      onClick: jest.fn()
    }
    render(<PaginationItem {...clickeableConfig} />)

    const clickButton = screen.getByTestId(basicTestId)
    fireEvent.click(clickButton)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
