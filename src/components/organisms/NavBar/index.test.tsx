import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavBar from '.'
// TYPES & INTERFACES
import { NavBarProps } from '../../../interfaces/organismProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('NavBar', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<NavBar />)
    const testNavBar = screen.getByTestId(basicTestId)

    expect(testNavBar).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: NavBarProps = {
        [name]: value
      }

      render(<NavBar {...classTestObject} />)

      const testStylingPropValueNavBarGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavBarGroup.className).toContain(result)
      cleanup()
    })
  })
})
