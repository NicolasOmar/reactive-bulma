import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Button from '.'

describe('Button', () => {
  test('Should render the Button without text', () => {
    render(<Button />)
    const testButton = screen.getByTestId('test-button')
    expect(testButton).toBeInTheDocument()
  })

  test('Should render the Button with a testing Text', () => {
    const testText = 'test'
    render(<Button text={testText} />)
    const testButton = screen.getByText(testText)
    expect(testButton).toBeInTheDocument()
  })
})
