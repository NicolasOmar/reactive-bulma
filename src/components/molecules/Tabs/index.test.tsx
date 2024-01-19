import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Tabs from '.'
// TYPES & INTERFACES
import { TabsProps } from '../../../interfaces/moleculeProps'
import { TabItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { testing } from './index.mocks.json'

describe('Tabs', () => {
  const { basicTestId, testClasses } = testing
  const basicTestTabsConfig = {
    tabs: createObjArray() as TabItemProps[]
  }

  test('Should render the component', () => {
    render(<Tabs {...basicTestTabsConfig} />)
    const testTabs = screen.getByTestId(basicTestId)

    expect(testTabs).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: TabsProps = {
        ...basicTestTabsConfig,
        [name]: value
      }

      render(<Tabs {...classTestObject} />)

      const testStylingPropValueTabsGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTabsGroup.className).toContain(result)
      cleanup()
    })
  })
})
