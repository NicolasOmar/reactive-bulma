import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Grid from '.'
// TYPES & INTERFACES
import { GridProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Grid', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<Grid listOfCells={[]} />)
    const testGrid = screen.getByTestId(basicTestId)

    expect(testGrid).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: GridProps = {
        [name]: value,
        listOfCells: []
      }

      render(<Grid {...classTestObject} />)

      const testStylingPropValueGridGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueGridGroup.className).toContain(result)
      cleanup()
    })
  })
})
