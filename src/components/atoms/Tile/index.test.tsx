import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Tile from '.'
// TYPES & INTERFACES
import { TileProps } from '@interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Tile', () => {
  const { basicTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<Tile />)
    const testTile = screen.getByTestId(basicTestId)

    expect(testTile).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-|notification /gm,
        ''
      )}`
      const classTestObject: TileProps = {
        [name]: value
      }

      render(<Tile {...classTestObject} />)

      const testStylingPropValueTileGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTileGroup.className).toContain(result)
      cleanup()
    })
  })
})
