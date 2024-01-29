import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavbarDropdown from '.'
// TYPES & INTERFACES
import { NavbarDropdownProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('NavbarDropdown', () => {
  const { basicTestId, testClasses, testBaseConfig } = testing

  test('Should render the component', () => {
    render(<NavbarDropdown {...testBaseConfig} />)
    const testNavbarDropdown = screen.getByTestId(basicTestId)

    expect(testNavbarDropdown).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result
        .replace(/navbar-item|has-dropdown|is-|has-/gm, '')
        .replace(/-up/gm, 'up')}`
      const classTestObject: NavbarDropdownProps = {
        ...testBaseConfig.items.map((item, i) => (i % 2 ? 'divider' : item)),
        items: testBaseConfig.items.map((item, i) =>
          i % 2 ? 'divider' : item
        ),
        [name]: value
      }

      render(<NavbarDropdown {...classTestObject} />)

      const testStylingPropValueNavbarDropdown =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavbarDropdown.className).toContain(result)
      cleanup()
    })
  })
})
