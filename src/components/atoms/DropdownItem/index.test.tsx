import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import DropdownItem from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('DropdownItem', () => {
  const { basicTestId, testText } = testing

  test('Should render the component', () => {
    render(<DropdownItem itemText={testText} />)
    const testDropdownItem = screen.getByTestId(basicTestId)
    expect(testDropdownItem).toBeInTheDocument()
  })
})
