import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Level from '.'
// TYPES & INTERFACES
import { LevelProps } from '@interfaces/organismProps'
import { LevelItemProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { testing } from './index.mocks.json'

const executeLevelSideTests = (
  sideProp: { prop: string; case: string },
  itemListConfig: LevelItemProps[]
) => {
  test(sideProp.case, () => {
    const testLevelConfig = { [sideProp.prop]: itemListConfig }
    render(<Level {...testLevelConfig} />)

    itemListConfig.forEach(({ testId }) => {
      const testLevelItem = screen.getByTestId(testId!)
      expect(testLevelItem).toBeInTheDocument()
    })
  })
}

describe('Level', () => {
  const { basicTestId, testClasses, levelSidesToTest } = testing
  const itemListConfig = createObjArray({
    externalParser: i => ({
      testId: `test-item-#${i}`,
      content: `Test item #${i}`
    })
  }) as LevelItemProps[]

  test('Should render the component', () => {
    render(<Level />)
    const testLevel = screen.getByTestId(basicTestId)

    expect(testLevel).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: LevelProps = {
        [name]: value
      }

      render(<Level {...classTestObject} />)

      const testStylingPropValueLevelGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueLevelGroup.className).toContain(result)
      cleanup()
    })
  })

  levelSidesToTest.forEach(_sideConfig =>
    executeLevelSideTests(_sideConfig, itemListConfig)
  )
})
