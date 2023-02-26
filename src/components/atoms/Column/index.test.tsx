import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Column from '.'

describe('Column', () => {
  test('Should render without children', () => {
    render(<Column />)
    const columnTestId = screen.getByTestId('test-column')
    expect(columnTestId).toBeInTheDocument()
  })
})
