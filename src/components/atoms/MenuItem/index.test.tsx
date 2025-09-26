import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import MenuItem from '.'
// TYPES & INTERFACES
import { MenuItemProps } from '@interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('MenuItem', () => {
  const { basicTestId, testClasses, testMenuItemText } = testing

  test('Should render the component', () => {
    render(<MenuItem text={testMenuItemText} />)
    const testMenuItem = screen.getByTestId(basicTestId)

    expect(testMenuItem).toBeInTheDocument()
    expect(testMenuItem.textContent).toBe(testMenuItemText)
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: MenuItemProps = {
        text: testMenuItemText,
        [name]: value
      }

      render(<MenuItem {...classTestObject} />)

      const testStylingPropValueMenuItemGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueMenuItemGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should click the component', () => {
    const clickeableConfig = {
      text: testMenuItemText,
      onClick: jest.fn()
    }
    render(<MenuItem {...clickeableConfig} />)
    const testClickeableMenuItem = screen.getByTestId(basicTestId)

    fireEvent.click(testClickeableMenuItem)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
