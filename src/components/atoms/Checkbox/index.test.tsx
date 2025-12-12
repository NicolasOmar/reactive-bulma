import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Checkbox from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('Checkbox', () => {
  const { basicTestId, basicExample, exampleWithLabel, disabledMode } = testing

  test('Should render with minimal config', () => {
    render(<Checkbox {...basicExample} />)
    const minimalTestCheckBox = screen.getByTestId(basicTestId)
    expect(minimalTestCheckBox).toBeInTheDocument()
  })

  test('Should render with included text content', () => {
    const caseWithLabel = {
      ...basicExample,
      ...exampleWithLabel
    }
    render(<Checkbox {...caseWithLabel} />)
    const testTextContentCheckBox = screen.getByTestId(
      `${basicTestId}-with-component`
    )
    expect(testTextContentCheckBox).toBeInTheDocument()
  })

  test('Should check that the checkbox has been clicked', () => {
    const clickeableConfig = { ...basicExample, onChange: jest.fn() }

    render(<Checkbox {...clickeableConfig} />)
    const clickCheckBox = screen.getByTestId(basicTestId)

    fireEvent.click(clickCheckBox)
    expect(clickeableConfig.onChange).toHaveBeenCalled()
    expect(clickeableConfig.onChange).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableConfig = {
      ...basicExample,
      ...disabledMode,
      onChange: jest.fn()
    }

    render(<Checkbox {...notClickeableConfig} />)
    const disabledCheckBox = screen.getByTestId(basicTestId)

    fireEvent.change(disabledCheckBox)
    expect(notClickeableConfig.onChange).not.toHaveBeenCalled()
    expect(notClickeableConfig.onChange).toHaveBeenCalledTimes(0)
  })
})
