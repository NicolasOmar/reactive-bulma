import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TileGroup from '.'
import { TileBox } from '@components/molecules'
// TYPES & INTERFACES
import { TileGroupProps } from '@interfaces/organismProps'
import { TileProps } from '@interfaces/atomProps'
import { BasicColorType } from '@customTypes/styleTypes'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { testing } from './index.mocks.json'
import tileMocks from '@components/atoms/Tile/index.mocks.json'

describe('TileGroup', () => {
  const { basicTestId, extensionTestId, testClasses, testChildrenColors } =
    testing
  const threeParentTiles = createObjArray({
    externalParser: i => ({
      context: 'is-parent',
      children: (
        <TileBox color={testChildrenColors[i] as BasicColorType}>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    })
  }) as TileProps[]
  const baseConfig = {
    context: 'is-ancestor',
    groupConfig: threeParentTiles
  } as TileGroupProps

  test('Should render the component', () => {
    render(<TileGroup {...baseConfig} />)
    const testTileGroup = screen.getByTestId(
      `${basicTestId}-${extensionTestId}`
    )

    expect(testTileGroup).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${extensionTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: TileGroupProps = {
        ...baseConfig,
        [name]: value
      }

      render(<TileGroup {...classTestObject} />)

      const testStylingPropValueTileGroupGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTileGroupGroup.className).toContain(result)
      cleanup()
    })
  })
})
