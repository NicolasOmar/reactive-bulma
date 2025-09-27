import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import { FormFieldProps } from '@interfaces/organismProps'
import { FormFieldInputProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import mocks from './index.mocks.json'

describe('FormField', () => {
  const { basicTestId, testClasses, basicGroupedInputTestId, baseConfig } =
    mocks.testing
  const baseTestConfig = {
    config: baseConfig.config as FormFieldInputProps
  }
  const listOfGroupedInputControls = createObjArray({
    numberOfItems: 2,
    externalParser: () => baseConfig.config
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

  test('Should render a grouped list of inputs', () => {
    const testFieldWithGroupedInputList = {
      config: listOfGroupedInputControls as FormFieldInputProps[],
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
      config: listOfGroupedInputControls as FormFieldInputProps[]
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
