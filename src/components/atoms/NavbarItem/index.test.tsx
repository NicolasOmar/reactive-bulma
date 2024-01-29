import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavbarItem from '.'
// TYPES & INTERFACES
import { NavbarItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('NavbarItem', () => {
  const { basicTestId, testBaseConfig, testClasses } = testing

  test('Should render the component', () => {
    render(<NavbarItem {...testBaseConfig} />)
    const testNavbarItem = screen.getByTestId(basicTestId)

    expect(testNavbarItem).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: NavbarItemProps = {
        ...testBaseConfig,
        [name]: value
      }

      render(<NavbarItem {...classTestObject} />)

      const testStylingPropValueNavbarItemGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavbarItemGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should check that the input has been clicked', () => {
    const clickeableConfig = {
      ...testBaseConfig,
      onClick: jest.fn()
    }

    render(<NavbarItem {...clickeableConfig} />)
    const clickInput = screen.getByTestId(basicTestId)

    fireEvent.click(clickInput)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
