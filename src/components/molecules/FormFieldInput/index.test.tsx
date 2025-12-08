import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
import {
  FormFieldElement,
  FormFieldInputProps
} from '@interfaces/moleculeProps'
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
    textAreaConfigCase,
    buttonConfigCase
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
      },
      {
        config: buttonConfigCase,
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

  test('Should render different input cases with its label', () => {
    const cases = [
      {
        config: {
          ...selectConfigCase,
          mainInput: {
            ...selectConfigCase.mainInput,
            fieldLabel: 'Select Input'
          }
        },
        lookByContainer: true
      },
      {
        config: {
          ...checkboxConfigCase,
          mainInput: {
            ...selectConfigCase.mainInput,
            fieldLabel: 'Select Input'
          }
        },
        lookByContainer: true
      },
      {
        config: {
          ...radioButtonConfigCase,
          mainInput: {
            ...radioButtonConfigCase.mainInput,
            fieldLabel: 'Checkbox Input'
          }
        },
        lookByContainer: true
      },
      {
        config: {
          ...textAreaConfigCase,
          mainInput: {
            ...textAreaConfigCase.mainInput,
            fieldLabel: 'TextArea Input'
          }
        },
        lookByContainer: false
      },
      {
        config: {
          ...buttonConfigCase,
          mainInput: {
            ...textAreaConfigCase.mainInput,
            fieldLabel: 'TextArea Input'
          }
        },
        lookByContainer: false
      }
    ]

    for (const inputCase of cases) {
      const typeString = inputCase.config.mainInput.type
      const caseTestId = inputCase.lookByContainer
        ? `test-form-field-container-${typeString}`
        : `test-form-field-${typeString}`
      const labelTestId = `test-form-field-${typeString}-label`

      render(<FormFieldInput {...(inputCase.config as FormFieldInputProps)} />)

      const caseFormField = screen.getByTestId(caseTestId)
      const labelFormField = screen.getByTestId(labelTestId)
      expect(caseFormField).toBeInTheDocument()
      expect(labelFormField).toBeInTheDocument()
      cleanup()
    }
  })

  test('Should render the three inputs', () => {
    const testIds = ['hello', 'how-are-you', 'goodbye']

    const renderedInputs = testIds.map(_testId => ({
      type: inputConfigCase.mainInput.type,
      config: {
        ...inputConfigCase.mainInput.config,
        inputConfig: {
          ...inputConfigCase.mainInput.config.inputConfig,
          testId: _testId
        }
      }
    })) as FormFieldElement[]

    render(
      <FormFieldInput
        leftInput={renderedInputs[0]}
        mainInput={renderedInputs[1]}
        rightInput={renderedInputs[2]}
      />
    )

    testIds.forEach(_testId => {
      const testIdCase = screen.getByTestId(_testId)
      expect(testIdCase).toBeInTheDocument()
    })
  })
})
