import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import ProgressBar from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('ProgressBar', () => {
  const { inputValues, outputValues } = mocks.test

  test('Should render without any props', () => {
    render(<ProgressBar />)
    const testProgressBar = screen.getByTestId(mocks.basicTestId)
    expect(testProgressBar).toBeInTheDocument()
  })

  test('Should render the value having in mind fixed logic', () => {
    inputValues.forEach((_input, i) => {
      render(<ProgressBar value={_input} />)
      const testInputProgress = screen.getByTestId(mocks.basicTestId)
      expect(testInputProgress.innerHTML).toBe(`${outputValues[i]}%`)
      cleanup()
    })
  })

  test('Should render the loading/indeterminated logic with its value', () => {
    inputValues.forEach(_input => {
      render(
        <ProgressBar
          value={_input}
          isLoading={true}
        />
      )
      const testInputProgress = screen.getByTestId(mocks.basicTestId)
      expect(testInputProgress.innerHTML).toBe('0%')
      cleanup()
    })
  })
})
