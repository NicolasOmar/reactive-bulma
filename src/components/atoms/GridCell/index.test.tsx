import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import GridCell from '.'
// TYPES & INTERFACES
import { GridCellProps } from '@interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('GridCell', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<GridCell />)
    const testGridCell = screen.getByTestId(basicTestId)

    expect(testGridCell).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: GridCellProps = {
        [name]: value
      }

      render(<GridCell {...classTestObject} />)

      const testStylingPropValueGridCellGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueGridCellGroup.className).toContain(result)
      cleanup()
    })
  })
})
