import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
import { FormFieldHelper, FormFieldInputProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('FormFieldInput', () => {
  const {
    basicTestId,
    inputConfigCase,
    basicLabelTestId,
    basicHelperTestId,
    // withLabel,
    withHelper,
    selectConfigCase,
    checkboxConfigCase,
    radioButtonConfigCase,
    textAreaConfigCase
  } = testing

  test('Should render the component', () => {
    render(<FormFieldInput {...(inputConfigCase as FormFieldInputProps)} />)
    const testFormFieldSection = screen.getByTestId(basicTestId)

    expect(testFormFieldSection).toBeInTheDocument()
  })

  test.skip('Should render a helper and a label next to the required input', () => {
    const testFieldWithLabelAndHelper = {
      ...(inputConfigCase as FormFieldInputProps),
      helper: withHelper
    }

    render(<FormFieldInput {...testFieldWithLabelAndHelper} />)
    const testFieldLabel = screen.getByTestId(basicLabelTestId)
    const testFieldHelp = screen.getByTestId(basicHelperTestId)

    expect(testFieldLabel).toBeInTheDocument()
    expect(testFieldHelp).toBeInTheDocument()
  })

  test.skip('Should render a helper with same color than FormFieldInput input', () => {
    const testFieldWithLabelAndHelper = {
      ...(inputConfigCase as FormFieldInputProps),
      helper: {
        ...withHelper,
        color: 'is-danger'
      } as FormFieldHelper
    }

    render(<FormFieldInput {...testFieldWithLabelAndHelper} />)
    const testFieldHelp = screen.getByTestId(`${basicHelperTestId}-danger`)

    expect(testFieldHelp).toBeInTheDocument()
  })

  test('Should render different input cases', () => {
    const cases = [
      {
        config: selectConfigCase,
        lookByContainer: true
      },
      {
        config: checkboxConfigCase,
        lookByContainer: true
      },
      {
        config: radioButtonConfigCase,
        lookByContainer: true
      },
      {
        config: textAreaConfigCase,
        lookByContainer: false
      }
    ]

    for (const inputCase of cases) {
      const typeString = inputCase.config.mainInput.type
      const caseTestId = inputCase.lookByContainer
        ? `test-form-field-container-${typeString}`
        : `test-form-field-${typeString}`

      render(<FormFieldInput {...(inputCase.config as FormFieldInputProps)} />)

      const caseFormField = screen.getByTestId(caseTestId)
      expect(caseFormField).toBeInTheDocument()
      cleanup()
    }
  })
})
