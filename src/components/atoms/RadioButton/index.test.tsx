import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import RadioButton from '.'
// TYPES & INTERFACES
import { RadioButtonProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('RadioButton', () => {
  test('Should render with minimal config', () => {
    render(<RadioButton {...(testing.basicExample as RadioButtonProps)} />)
    const minimalTestRadioButton = screen.getByTestId('test-container-control')
    expect(minimalTestRadioButton).toBeInTheDocument()
  })
})
