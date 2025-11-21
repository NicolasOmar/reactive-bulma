import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Panel from '.'
// TYPES & INTERFACES
import { PanelProps } from '@interfaces/organismProps'
// MOCKS
import { testing } from './index.mocks.json'
import panelTabsMock from '@components/molecules/PanelTabs/index.mocks.json'

describe('Panel', () => {
  const { basicTestId, basicConfig, testClasses } = testing
  const typedBasicConfig = basicConfig as PanelProps

  test('Should render the component', () => {
    render(<Panel {...typedBasicConfig} />)
    const testPanel = screen.getByTestId(basicTestId)
    const testPanelTabs = screen.getByTestId(panelTabsMock.testing.basicTestId)

    expect(testPanel).toBeInTheDocument()
    expect(testPanelTabs).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PanelProps = {
        ...typedBasicConfig,
        [name]: value
      }

      render(<Panel {...classTestObject} />)

      const testStylingPropValuePanelGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePanelGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the component', () => {
    const noTabsConfig: PanelProps = {
      ...typedBasicConfig,
      panelTabs: undefined
    }
    render(<Panel {...noTabsConfig} />)
    expect(() =>
      screen.getByTestId(panelTabsMock.testing.basicTestId)
    ).toThrow()
  })
})
