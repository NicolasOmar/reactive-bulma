import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Skeleton from '.'
// TYPES & INTERFACES
// CONSTANTS
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Skeleton', () => {
  const { basicTestId } = testing

  test('Should render the component', () => {
    render(<Skeleton />)
    const testSkeleton = screen.getByTestId(basicTestId)

    expect(testSkeleton).toBeInTheDocument()
  })
})
