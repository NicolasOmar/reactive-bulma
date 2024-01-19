import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import PanelBlock from '.'
// TYPES & INTERFACES
import { PanelBlockProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('PanelBlock', () => {
  const { basicConfig, basicTestBlockId, basicTestIconId, testClasses } =
    testing

  test('Should render the component', () => {
    render(<PanelBlock {...basicConfig} />)
    const testPanelBlock = screen.getByTestId(basicTestBlockId)
    const testPanelBlockIcon = screen.getByTestId(basicTestIconId)

    expect(testPanelBlock).toBeInTheDocument()
    expect(testPanelBlockIcon).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestBlockId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: PanelBlockProps = {
        ...basicConfig,
        [name]: value
      }

      render(<PanelBlock {...classTestObject} />)

      const testStylingPropValuePanelBlockGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePanelBlockGroup.className).toContain(result)
      cleanup()
    })
  })
})
