import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Dropdown from '.'
// TYPES & INTERFACES
import { DropdownProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Dropdown', () => {
  const { basicTestId, testConfig, testClasses } = testing

  test('Should render the component', () => {
    render(<Dropdown {...testConfig} />)
    const testDropdown = screen.getByTestId(basicTestId)
    expect(testDropdown).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: DropdownProps = {
        ...testConfig,
        [name]: value
      }

      render(<Dropdown {...classTestObject} />)

      const testStylingPropValueDropdownGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueDropdownGroup.className).toContain(result)
      cleanup()
    })
  })
})
