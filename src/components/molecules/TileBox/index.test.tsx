import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TileBox from '.'
// TYPES & INTERFACES
import { TileProps } from '../../../interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('TileBox', () => {
  const { basicTestId, extensionTestId, testClasses } = testing

  test('Should render the component', () => {
    render(<TileBox />)
    const testTileBox = screen.getByTestId(`${basicTestId}${extensionTestId}`)

    expect(testTileBox).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-|notification /gm,
        ''
      )}${extensionTestId}`
      const classTestObject: TileProps = {
        [name]: value
      }

      render(<TileBox {...classTestObject} />)

      const testStylingPropValueTileBoxGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTileBoxGroup.className).toContain(result)
      cleanup()
    })
  })
})
