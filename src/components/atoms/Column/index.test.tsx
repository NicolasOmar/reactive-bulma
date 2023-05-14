import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Column from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Column', () => {
  const { basicTestId } = mocks.testing

  test('Should render without children', () => {
    render(<Column />)
    const columnTestId = screen.getByTestId(basicTestId)
    expect(columnTestId).toBeInTheDocument()
  })
})
