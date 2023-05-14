import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Block from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Block', () => {
  const { testId } = mocks.testing

  test('Should not render without children', () => {
    render(<Block />)
    expect(() => screen.getByTestId('test-block')).toThrow()
  })

  test('Should render having a children', () => {
    render(<Block>{<p></p>}</Block>)
    const testBlockId = screen.getByTestId('test-block')
    expect(testBlockId).toBeInTheDocument()
  })

  test('Should render having a different test id', () => {
    render(<Block testId={testId}>{<p></p>}</Block>)
    const testBlockId = screen.getByTestId(testId)
    expect(testBlockId).toBeInTheDocument()
  })
})
