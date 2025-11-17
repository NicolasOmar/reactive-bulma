import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
import { FormFieldInputProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('FormFieldInput', () => {
  const {
    basicTestId,
    inputConfigCase,
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
