import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import {
  FormFieldProps,
  InputControlProps
} from '../../../interfaces/moleculeProps'
// PARSERS
import { createObjArray } from '../../../functions/parsers'
// MOCKS
import { testing } from './index.mocks.json'
import inputControlMocks from '../InputControl/index.mocks.json'

describe('FormField', () => {
  const { baseConfig } = inputControlMocks.testing
  const {
    basicTestId,
    testClasses,
    withLabel,
    withHelper,
    basicLabelTestId,
    basicHelperTestId,
    basicGroupedInputTestId
  } = testing
  const baseTestConfig = {
    inputControlConfig: baseConfig as InputControlProps
  }
  const listOfGroupedInputControls = createObjArray({
    numberOfItems: 2,
    externalParser: () => baseConfig
  })

  test('Should render the component', () => {
    render(<FormField {...baseTestConfig} />)
    const testFormField = screen.getByTestId(basicTestId)

    expect(testFormField).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: FormFieldProps = {
        ...baseTestConfig,
        [name]: value
      }

      render(<FormField {...classTestObject} />)

      const testStylingPropValueFormFieldGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueFormFieldGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render a helper and a label next to the required input', () => {
    const testFieldWithLabelAndHelper = {
      ...baseTestConfig,
      ...withLabel,
      ...withHelper
    }

    render(<FormField {...testFieldWithLabelAndHelper} />)
    const testFieldLabel = screen.getByTestId(basicLabelTestId)
    const testFieldHelp = screen.getByTestId(basicHelperTestId)

    expect(testFieldLabel).toBeInTheDocument()
    expect(testFieldHelp).toBeInTheDocument()
  })

  test('Should render a helper with same color than FormField input', () => {
    const testFieldWithLabelAndHelper = {
      inputControlConfig: {
        ...inputControlMocks.testing.baseConfig,
        inputConfig: {
          color: 'is-danger'
        }
      } as InputControlProps,
      ...withHelper
    }

    render(<FormField {...testFieldWithLabelAndHelper} />)
    const testFieldHelp = screen.getByTestId(`${basicHelperTestId}-danger`)

    expect(testFieldHelp).toBeInTheDocument()
  })

  test('Should render a grouped list of inputs', () => {
    const testFieldWithGroupedInputList = {
      inputControlConfig: listOfGroupedInputControls as InputControlProps[],
      isGrouped: true
    }

    render(<FormField {...testFieldWithGroupedInputList} />)

    listOfGroupedInputControls.forEach((_, i) => {
      const testFieldHelp = screen.getByTestId(
        `${basicGroupedInputTestId}-${i}`
      )
      expect(testFieldHelp).toBeInTheDocument()
    })
  })

  test('Should render first input from a list when is FormField is not grouped', () => {
    const testFieldWithInputList = {
      inputControlConfig: listOfGroupedInputControls as InputControlProps[]
    }

    render(<FormField {...testFieldWithInputList} />)

    listOfGroupedInputControls.forEach((_, i) => {
      const testInputListItem = `${basicGroupedInputTestId}-${i}`
      expect(() => screen.getByTestId(testInputListItem)).toThrow()
    })

    const testFormField = screen.getByTestId(basicTestId)
    expect(testFormField).toBeInTheDocument()
  })
})
