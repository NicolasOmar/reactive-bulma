import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Select from '.'
// TYPES & INTERFACES
// MOCKS
import mocks from './index.mocks.json'

describe('Select', () => {
  const { basicTestId } = mocks.testing
  test('Should render without any props', () => {
    render(<Select />)
    const testSelect = screen.getByTestId(basicTestId)
    const testSelectContainer = screen.getByTestId(`${basicTestId}-container`)
    expect(testSelect).toBeInTheDocument()
    expect(testSelectContainer).toBeInTheDocument()
  })
})
