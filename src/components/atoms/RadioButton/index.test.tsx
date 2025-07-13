import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import RadioButton from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('RadioButton', () => {
  const { basicExample, containerTestId, severalOptions, radioButtonTestId } =
    testing

  test('Should render with minimal config', () => {
    render(<RadioButton {...basicExample} />)
    const minimalTestRadioButton = screen.getByTestId(containerTestId)
    expect(minimalTestRadioButton).toBeInTheDocument()
  })

  test('Should render the several checkbox options', () => {
    render(<RadioButton {...severalOptions} />)
    severalOptions.options.forEach((_option, i) => {
      const radioButtonTestItem = screen.getByTestId(
        `${radioButtonTestId}-${i}`
      )
      expect(radioButtonTestItem).toBeInTheDocument()
    })
  })

  test('Should check that the disabled option has not been clicked', () => {
    const nonClickeableRadioButton = {
      isDisabled: true,
      onChange: jest.fn()
    }
    const disabledOptions = {
      ...severalOptions,
      options: severalOptions.options.map((_option, i) =>
        i === 0
          ? { ..._option, isDisabled: true }
          : { ..._option, ...nonClickeableRadioButton }
      )
    }

    render(<RadioButton {...disabledOptions} />)
    severalOptions.options.forEach((_option, i) => {
      const radioButtonItem = screen.getByTestId(`${radioButtonTestId}-${i}`)
      expect(radioButtonItem).toBeInTheDocument()

      if (i === 0) {
        fireEvent.click(radioButtonItem)
        expect(nonClickeableRadioButton.onChange).not.toHaveBeenCalled()
        expect(nonClickeableRadioButton.onChange).toHaveBeenCalledTimes(0)
      }
    })
  })
})
