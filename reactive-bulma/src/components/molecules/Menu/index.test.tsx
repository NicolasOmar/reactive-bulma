import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Menu from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('Menu', () => {
  const { basicTestId, testMenuStructure } = testing

  test('Should render the component', () => {
    render(<Menu {...testMenuStructure} />)

    const testMenu = screen.getByTestId(basicTestId)
    expect(testMenu).toBeInTheDocument()
  })
})
