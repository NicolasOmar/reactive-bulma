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
// MOCKS
import { testing } from './index.mocks.json'
import inputControlMocks from '../InputControl/index.mocks.json'

describe('FormField', () => {
  const { basicTestId, testClasses } = testing
  const baseTestConfig = {
    inputControlConfig: inputControlMocks.testing
      .baseConfig as InputControlProps
  }

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
})
