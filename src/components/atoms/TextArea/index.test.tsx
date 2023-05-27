import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TextArea from '.'

describe('TextArea', () => {
  test('Should render with required props only', () => {
    render(<TextArea />)
    const basicTextArea = screen.getByTestId('test-textarea')
    expect(basicTextArea).toBeInTheDocument()
  })
})
