import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import {
  FormFieldInputProps,
  FormFieldProps
} from '../../../interfaces/organismProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { testing } from './index.mocks.json'
import inputControlMocks from '../../molecules/InputControl/index.mocks.json'

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
    inputControlConfig: baseConfig.inputControlConfig as FormFieldInputProps
  }
  const listOfGroupedInputControls = createObjArray({
    numberOfItems: 2,
    externalParser: () => baseConfig.inputControlConfig
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
      ...withLabel,
      inputControlConfig: {
        ...baseTestConfig.inputControlConfig,
        helper: withHelper
      }
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
        ...inputControlMocks.testing.baseConfig.inputControlConfig,
        helper: {
          ...withHelper,
          color: 'is-danger'
        }
      } as FormFieldInputProps
    }

    render(<FormField {...testFieldWithLabelAndHelper} />)
    const testFieldHelp = screen.getByTestId(`${basicHelperTestId}-danger`)

    expect(testFieldHelp).toBeInTheDocument()
  })

  test('Should render a grouped list of inputs', () => {
    const testFieldWithGroupedInputList = {
      inputControlConfig: listOfGroupedInputControls as FormFieldInputProps[],
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
      inputControlConfig: listOfGroupedInputControls as FormFieldInputProps[]
    }

    render(<FormField {...testFieldWithInputList} />)

    listOfGroupedInputControls.forEach((_, i) => {
      const testInputListItem = `${basicGroupedInputTestId}-${i}`
      expect(() => screen.getByTestId(testInputListItem)).toThrow()
    })

    const testFormField = screen.getByTestId(basicTestId)
    expect(testFormField).toBeInTheDocument()
  })

  test('Should render different input cases', () => {
    const cases = [
      {
        config: testing.selectConfigCase,
        lookByContainer: true
      },
      {
        config: testing.checkboxConfigCase,
        lookByContainer: true
      },
      {
        config: testing.radiobuttonConfigcase,
        lookByContainer: true
      },
      {
        config: testing.textAreaConfigCase,
        lookByContainer: false
      }
    ]

    for (const inputCase of cases) {
      const typeString = inputCase.config.inputControlConfig.type
      const caseTestId = inputCase.lookByContainer
        ? `test-form-field-container-${typeString}`
        : `test-form-field-${typeString}`

      render(
        <FormField
          inputControlConfig={
            inputCase.config.inputControlConfig as FormFieldInputProps
          }
        />
      )

      const caseFormField = screen.getByTestId(caseTestId)
      expect(caseFormField).toBeInTheDocument()
      cleanup()
    }
  })
})
