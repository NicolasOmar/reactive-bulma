import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Input from '.'
// MOCKS
import mocks from './index.mocks.json'
import { InputProps } from '../../../interfaces/atomProps'

describe('Input', () => {
  const { basicExample } = mocks.testing

  test('Should render with required props only', () => {
    const basicProps = basicExample as InputProps
    render(<Input {...basicProps} />)
    const imageTestId = screen.getByTestId('test-input')
    expect(imageTestId).toBeInTheDocument()
  })
})
