import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import File from '.'
// TYPES & INTERFACES
// MOCKS

describe('File', () => {
  test('Should render without any props', () => {
    render(<File />)
    const testFile = screen.getByText('Choose a file…')
    expect(testFile).toBeInTheDocument()
  })
})
