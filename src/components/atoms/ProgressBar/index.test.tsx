import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import ProgressBar from '.'
// TYPES & INTERFACES
import { ProgressBarProps } from '@interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('ProgressBar', () => {
  const { inputValues, outputValues, basicTestId } = testing

  test('Should render without any props', () => {
    render(<ProgressBar />)
    const testProgressBar = screen.getByTestId(basicTestId)
    expect(testProgressBar).toBeInTheDocument()
  })

  test('Should render the value having in mind fixed logic', () => {
    inputValues.forEach((_input, i) => {
      render(<ProgressBar value={_input} />)
      const testInputProgress = screen.getByTestId(basicTestId)
      expect(testInputProgress.innerHTML).toBe(`${outputValues[i]}%`)
      cleanup()
    })
  })

  test('Should render the loading/indeterminated logic with its value', () => {
    inputValues.forEach(_input => {
      const testInputValueConfig = {
        value: _input,
        isLoading: true
      } as ProgressBarProps

      render(<ProgressBar {...testInputValueConfig} />)
      const testInputProgress = screen.getByTestId(basicTestId)
      expect(testInputProgress.innerHTML).toBe('0%')
      cleanup()
    })
  })
})
