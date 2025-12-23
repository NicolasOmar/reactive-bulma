import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TextArea from '.'
// TYPES & INTERFACES
import { TextAreaProps } from '@interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('TextArea', () => {
  const { basicTestId, testClasses } = testing

  test('Should render with required props only', () => {
    render(<TextArea />)
    const basicTextArea = screen.getByTestId(basicTestId)
    expect(basicTextArea).toBeInTheDocument()
  })

  test('Should render with a value', () => {
    const testValue = '150'
    const basicProps = {
      value: testValue,
      onChange: jest.fn()
    } as TextAreaProps

    render(<TextArea {...basicProps} />)
    const testAreaWithText = screen.getByText(testValue)
    expect(testAreaWithText).toBeInTheDocument()
  })

  test('Should render with specific classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { [prop]: classValue } as TextAreaProps
      const testIdWithClass = `${basicTestId}-${classValue.replace(
        /is-|has-/gm,
        ''
      )}`

      render(<TextArea {...classObj} />)
      const testClassTextArea = screen.getByTestId(testIdWithClass)
      expect(testClassTextArea.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the input has been clicked', () => {
    const clickeableConfig = {
      onClick: jest.fn()
    } as TextAreaProps

    render(<TextArea {...clickeableConfig} />)
    const clickInput = screen.getByTestId(basicTestId)

    fireEvent.click(clickInput)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableInput = {
      isDisabled: true,
      onClick: jest.fn()
    } as TextAreaProps

    render(<TextArea {...notClickeableInput} />)
    const disabledInput = screen.getByTestId(basicTestId)

    fireEvent.click(disabledInput)
    expect(notClickeableInput.onClick).not.toHaveBeenCalled()
    expect(notClickeableInput.onClick).toHaveBeenCalledTimes(0)
  })
})
