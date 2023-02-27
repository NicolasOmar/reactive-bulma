import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import ProgressBar from '.'

describe('ProgressBar', () => {
  const progressBarId = 'test-progress-bar'

  test('Should render the Button without text', () => {
    render(<ProgressBar />)
    const testProgressBar = screen.getByTestId(progressBarId)
    expect(testProgressBar).toBeInTheDocument()
  })
})
