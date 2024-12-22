import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import InputControl from '.'
// TYPES & INTERFACES
import { InputControlProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('InputControl', () => {
  const { basicTestId, testClasses, baseConfig } = testing
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
        /is-|has-/gm,
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
})
