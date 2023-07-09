import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Checkbox from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Checkbox', () => {
  const { basicTestId, withTextContent, disabledMode } = mocks.testing
  test('Should render with minimal config', () => {
    render(<Checkbox />)
    const minimalTestCheckbox = screen.getByTestId(basicTestId)
    expect(minimalTestCheckbox).toBeInTheDocument()
  })

  test('Should render with included text content', () => {
    render(<Checkbox {...withTextContent} />)
    const testTextContentCheckbox = screen.getByTestId(
      `${basicTestId}-${withTextContent.content}`
    )
    expect(testTextContentCheckbox).toBeInTheDocument()
  })

  test('Should check that the checkbox has been clicked', () => {
    const clickeableConfig = { onChange: jest.fn() }

    render(<Checkbox {...clickeableConfig} />)
    const clickCheckbox = screen.getByTestId(basicTestId)

    fireEvent.click(clickCheckbox)
    expect(clickeableConfig.onChange).toHaveBeenCalled()
    expect(clickeableConfig.onChange).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableConfig = {
      ...disabledMode,
      onChange: jest.fn()
    }

    render(<Checkbox {...notClickeableConfig} />)
    const disabledCheckbox = screen.getByTestId(basicTestId)

    fireEvent.change(disabledCheckbox)
    expect(notClickeableConfig.onChange).not.toHaveBeenCalled()
    expect(notClickeableConfig.onChange).toHaveBeenCalledTimes(0)
  })
})
