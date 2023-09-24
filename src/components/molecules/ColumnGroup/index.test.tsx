import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import ColumnGroup from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('ColumnGroup', () => {
  const { basicTestId } = testing

  test('Should render without columns', () => {
    render(<ColumnGroup listOfColumns={[]} />)
    const testColumnGroup = screen.getByTestId(basicTestId)
    expect(testColumnGroup).toBeInTheDocument()
  })
})
