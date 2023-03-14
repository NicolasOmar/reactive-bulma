import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Button from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Button', () => {
  const { basicTestId, dummyText, testStyles, testClasses } = mocks.testing

  test('Should render the Button without text', () => {
    render(<Button />)
    const testButton = screen.getByTestId(basicTestId)
    expect(testButton).toBeInTheDocument()
  })

  test('Should render the Button with a dummy Text', () => {
    render(<Button text={dummyText} />)
    const textButton = screen.getByText(dummyText)
    expect(textButton).toBeInTheDocument()
  })

  test('Should render the Button with specfic CSS styles', () => {
    Object.keys(testStyles).forEach(prop => {
      const styleValue = (testStyles as any)[prop]
      const styleObj = { [prop]: styleValue }
      render(<Button style={styleObj} />)
      const styleButton = screen.getByTestId(basicTestId)
      expect(styleButton.style[prop as any]).toContain(styleValue)
      cleanup()
    })
  })

  test('Should render the Button with specfic classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as any)[prop]
      const classObj = { [prop]: classValue }
      const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
      render(<Button {...classObj} />)
      const classButton = screen.getByTestId(testIdWithClass)
      expect(classButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the button has been clicked', () => {
    const clickeableConfig = { onClick: jest.fn() }
    render(<Button {...clickeableConfig} />)
    const clickButton = screen.getByTestId(basicTestId)
    fireEvent.click(clickButton)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableBtn = {
      isDisabled: true,
      onClick: jest.fn()
    }

    render(<Button {...notClickeableBtn} />)
    const disabledButton = screen.getByTestId(basicTestId)

    fireEvent.click(disabledButton)
    expect(notClickeableBtn.onClick).not.toHaveBeenCalled()
    expect(notClickeableBtn.onClick).toHaveBeenCalledTimes(0)
  })
})
