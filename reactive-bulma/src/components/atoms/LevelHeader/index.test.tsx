import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import LevelHeader from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('LevelHeader', () => {
  const { basicTestId, basicConfig } = testing

  test('Should render the component', () => {
    render(<LevelHeader {...basicConfig} />)
    const testLevelContainer = screen.getByTestId(basicTestId)
    const testLevelHeader = screen.getByText(basicConfig.header)
    const testLevelValue = screen.getByText(basicConfig.value)

    expect(testLevelContainer).toBeInTheDocument()
    expect(testLevelHeader).toBeInTheDocument()
    expect(testLevelValue).toBeInTheDocument()
  })
})
