import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TagList from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('TagList', () => {
  const { basicTestId, testTagListStructure } = testing

  test('Should render the component', () => {
    render(<TagList {...testTagListStructure} />)
    const testTagList = screen.getByTestId(basicTestId)

    expect(testTagList).toBeInTheDocument()
  })
})
