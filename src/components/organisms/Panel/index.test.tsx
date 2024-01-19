import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Panel from '.'
// TYPES & INTERFACES
import { PanelProps } from '../../../interfaces/organismProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Panel', () => {
  const { basicTestId, basicConfig, testClasses } = testing

  test('Should render the component', () => {
    render(<Panel {...basicConfig} />)
    const testPanel = screen.getByTestId(basicTestId)

    expect(testPanel).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PanelProps = {
        ...basicConfig,
        [name]: value
      }

      render(<Panel {...classTestObject} />)

      const testStylingPropValuePanelGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePanelGroup.className).toContain(result)
      cleanup()
    })
  })
})
