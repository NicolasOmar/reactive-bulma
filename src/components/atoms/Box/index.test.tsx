import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Box from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Box', () => {
  const { testId } = mocks.testing

  test('Should not render without children', () => {
    render(<Box />)
    expect(() => screen.getByTestId('test-box')).toThrow()
  })

  test('Should render having a children', () => {
    render(<Box>{<p></p>}</Box>)
    const testBlockId = screen.getByTestId('test-box')
    expect(testBlockId).toBeInTheDocument()
  })

  test('Should render having a different test id', () => {
    render(<Box testId={testId}>{<p></p>}</Box>)
    const testBlockId = screen.getByTestId(testId)
    expect(testBlockId).toBeInTheDocument()
  })
})
