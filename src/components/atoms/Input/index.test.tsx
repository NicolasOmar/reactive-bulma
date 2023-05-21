import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Input from '.'
// MOCKS
import mocks from './index.mocks.json'
import { InputProps } from '../../../interfaces/atomProps'

describe('Input', () => {
  const { basicTestId, basicExample, testClasses } = mocks.testing

  test('Should render with required props only', () => {
    const basicProps = basicExample as InputProps
    render(<Input {...basicProps} />)
    const basicTestInput = screen.getByTestId(basicTestId)
    expect(basicTestInput).toBeInTheDocument()
  })

  test('Should render with a text value', () => {
    const testValue = '150'
    const basicProps = { ...basicExample, text: testValue } as InputProps
    render(<Input {...basicProps} />)
    const testInputWithText = screen.getByTestId(basicTestId)
    expect(testInputWithText).toBeInTheDocument()
    expect(testInputWithText).toHaveAttribute('value', testValue)
  })

  test('Should render with specfic classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as any)[prop]
      const classObj = { [prop]: classValue } as InputProps
      const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
      render(<Input {...classObj} />)
      const testClassButton = screen.getByTestId(testIdWithClass)
      expect(testClassButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the input has been clicked', () => {
    const clickeableConfig = {
      ...basicExample,
      onClick: jest.fn()
    } as InputProps
    render(<Input {...clickeableConfig} />)
    const clickInput = screen.getByTestId(basicTestId)
    fireEvent.click(clickInput)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableInput = {
      ...basicExample,
      isDisabled: true,
      onClick: jest.fn()
    } as InputProps

    render(<Input {...notClickeableInput} />)
    const disabledInput = screen.getByTestId(basicTestId)

    fireEvent.click(disabledInput)
    expect(notClickeableInput.onClick).not.toHaveBeenCalled()
    expect(notClickeableInput.onClick).toHaveBeenCalledTimes(0)
  })

  test('Should check that the input value has been changed', () => {
    const valueToChange = '150'
    const changeableConfig = {
      ...basicExample,
      onChange: jest.fn()
    } as InputProps
    render(<Input {...changeableConfig} />)
    const testInputWithChange = screen.getByTestId(basicTestId)
    fireEvent.change(testInputWithChange, { target: { value: valueToChange } })
    expect(changeableConfig.onChange).toHaveBeenCalled()
    expect(changeableConfig.onChange).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableInput = {
      ...basicExample,
      isDisabled: true,
      onChange: jest.fn()
    } as InputProps

    render(<Input {...notClickeableInput} />)
    const disabledInput = screen.getByTestId(basicTestId)

    fireEvent.click(disabledInput)
    expect(notClickeableInput.onChange).not.toHaveBeenCalled()
    expect(notClickeableInput.onChange).toHaveBeenCalledTimes(0)
  })
})
