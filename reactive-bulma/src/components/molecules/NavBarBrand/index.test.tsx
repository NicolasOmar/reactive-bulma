import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavBarBrand from '.'
// TYPES & INTERFACES
import { NavBarBrandProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('NavBarBrand', () => {
  const { basicTestId, basicBurgerTestId, testBasicConfig, testClasses } =
    testing

  test('Should render the component', () => {
    render(<NavBarBrand {...testBasicConfig} />)
    const testNavBarBrand = screen.getByTestId(basicTestId)
    const testNavBarBrandBurger = screen.getByTestId(basicBurgerTestId)

    expect(testNavBarBrand).toBeInTheDocument()
    expect(testNavBarBrandBurger).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicBurgerTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: NavBarBrandProps = {
        ...testBasicConfig,
        [name]: value
      }

      render(<NavBarBrand {...classTestObject} />)

      const testStylingPropValueNavBarBrand =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavBarBrand.className).toContain(result)
      cleanup()
    })
  })
})
