import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import PanelBlock from '.'
// TYPES & INTERFACES
import { PanelBlockProps } from '@interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('PanelBlock', () => {
  const {
    basicConfig,
    controlConfig,
    buttonConfig,
    testClasses,
    basicTestBlockId,
    basicTestIconId,
    customTestId
  } = testing
  const typedBasicConfig = basicConfig as PanelBlockProps

  test('Should render the component', () => {
    render(<PanelBlock {...typedBasicConfig} />)
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
        ...typedBasicConfig,
        [name]: value
      }

      render(<PanelBlock {...classTestObject} />)

      const testStylingPropValuePanelBlockGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValuePanelBlockGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render different component configurations', () => {
    const panelBlockConfigTests = [
      {
        config: {
          ...controlConfig.config,
          props: {
            ...controlConfig.config.props,
            testId: customTestId
          }
        }
      },
      {
        config: {
          ...buttonConfig.config,
          props: {
            ...buttonConfig.config.props,
            testId: customTestId
          }
        }
      }
    ] as PanelBlockProps[]

    panelBlockConfigTests.forEach(panelBlockConfig => {
      render(<PanelBlock {...panelBlockConfig} />)

      const testControlConfig = screen.getByTestId(customTestId)
      expect(testControlConfig).toBeInTheDocument()

      cleanup()
    })
  })
})
