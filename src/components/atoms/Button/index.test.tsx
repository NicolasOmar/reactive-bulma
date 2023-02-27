import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Button from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Button', () => {
  const buttonTestId = 'test-button'

  test('Should render the Button without text', () => {
    render(<Button />)
    const testButton = screen.getByTestId(buttonTestId)
    expect(testButton).toBeInTheDocument()
  })

  test('Should render the Button with a dummy Text', () => {
    render(<Button text={mocks.dummyText} />)
    const textButton = screen.getByText(mocks.dummyText)
    expect(textButton).toBeInTheDocument()
  })

  test('Should render the Button with specfic classes', () => {
    Object.keys(mocks.testClasses).forEach(prop => {
      const classValue = (mocks.testClasses as any)[prop]
      const classObj = { [prop]: classValue }
      render(<Button {...classObj} />)
      const classButton = screen.getByTestId(buttonTestId)
      expect(classButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the button has been clicked', () => {
    const clickeableConfig = { onClick: jest.fn() }
    render(<Button {...clickeableConfig} />)
    const clickButton = screen.getByTestId(buttonTestId)
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
    const disabledButton = screen.getByTestId(buttonTestId)

    fireEvent.click(disabledButton)
    expect(notClickeableBtn.onClick).not.toHaveBeenCalled()
    expect(notClickeableBtn.onClick).toHaveBeenCalledTimes(0)
  })
})
