import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import InputControl from '.'
// TYPES & INTERFACES
import { HelperProps, InputControlProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { TEST_ID_REGEXP } from '@constants/regExp'
// MOCKS
import { testing } from './index.mocks.json'

describe('InputControl', () => {
  const {
    basicTestId,
    basicLabelTestId,
    basicHelperTestId,
    testClasses,
    baseConfig,
    withHelper
  } = testing
  const typedBaseConfig = {
    inputConfig: baseConfig.inputConfig
  } as InputControlProps

  test('Should render the component', () => {
    render(<InputControl {...typedBaseConfig} />)
    const testInputControl = screen.getByTestId(basicTestId)

    expect(testInputControl).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        TEST_ID_REGEXP.IS_HAS,
        ''
      )}`
      const classTestObject: InputControlProps = {
        ...typedBaseConfig,
        [name]: value
      }

      render(<InputControl {...classTestObject} />)

      const testStylingPropValueInputControlGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueInputControlGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render a helper and a label next to the required input', () => {
    const testFieldWithLabelAndHelper = {
      ...typedBaseConfig,
      ...testing.withLabel,
      helper: withHelper
    }

    render(<InputControl {...testFieldWithLabelAndHelper} />)
    const testFieldLabel = screen.getByTestId(basicLabelTestId)
    const testFieldHelp = screen.getByTestId(basicHelperTestId)

    expect(testFieldLabel).toBeInTheDocument()
    expect(testFieldHelp).toBeInTheDocument()
  })

  test('Should render a helper with same color than FormFieldInput input', () => {
    const testFieldWithLabelAndHelper = {
      ...typedBaseConfig,
      helper: {
        ...withHelper,
        color: 'danger'
      } as HelperProps
    }

    render(<InputControl {...testFieldWithLabelAndHelper} />)
    const testFieldHelp = screen.getByTestId(`${basicHelperTestId}-danger`)

    expect(testFieldHelp).toBeInTheDocument()
  })
})
