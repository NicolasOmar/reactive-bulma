import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import LevelItem from '.'
// TYPES & INTERFACES
import { LevelItemProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('LevelItem', () => {
  const { basicTestId, testClasses, testContent } = testing

  test('Should render the component', () => {
    render(<LevelItem content={testContent} />)
    const testLevelItem = screen.getByTestId(basicTestId)

    expect(testLevelItem).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: LevelItemProps = {
        content: testContent,
        [name]: value
      }

      render(<LevelItem {...classTestObject} />)

      const testStylingPropValueLevelItemGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueLevelItemGroup.className).toContain(result)
      cleanup()
    })
  })
})
