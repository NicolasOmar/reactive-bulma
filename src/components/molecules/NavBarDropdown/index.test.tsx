import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavBarDropdown from '.'
// TYPES & INTERFACES
import { NavBarDropdownProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('NavBarDropdown', () => {
  const { basicTestId, testClasses, testBaseConfig } = testing

  test('Should render the component', () => {
    render(<NavBarDropdown {...testBaseConfig} />)
    const testNavbarDropdown = screen.getByTestId(basicTestId)

    expect(testNavbarDropdown).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result
        .replace(/navbar-item|has-dropdown|is-|has-/gm, '')
        .replace(/-up/gm, 'up')}`
      const classTestObject: NavBarDropdownProps = {
        ...testBaseConfig,
        items: testBaseConfig.items.map((item, i) =>
          i % 2 ? 'divider' : item
        ),
        [name]: value
      }

      render(<NavBarDropdown {...classTestObject} />)

      const testStylingPropValueNavbarDropdown =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavbarDropdown.className).toContain(result)
      cleanup()
    })
  })
})
