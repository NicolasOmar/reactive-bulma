import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import CheckBox from '.'
import Tag from '../Tag'
// MOCKS
import mocks from './index.mocks.json'

describe('CheckBox', () => {
  const { basicTestId, withTextContent, disabledMode } = mocks.testing
  test('Should render with minimal config', () => {
    render(<CheckBox />)
    const minimalTestCheckBox = screen.getByTestId(basicTestId)
    expect(minimalTestCheckBox).toBeInTheDocument()
  })

  test('Should render with included text content', () => {
    render(<CheckBox {...withTextContent} />)
    const testTextContentCheckBox = screen.getByTestId(
      `${basicTestId}-${withTextContent.content}`
    )
    expect(testTextContentCheckBox).toBeInTheDocument()
  })

  test('Should render with included text content', () => {
    const componentContentConfig = {
      content: <Tag text='test' />
    }
    render(<CheckBox {...componentContentConfig} />)
    const testTextContentCheckBox = screen.getByTestId(
      `${basicTestId}-with-component`
    )
    expect(testTextContentCheckBox).toBeInTheDocument()
  })

  test('Should check that the checkbox has been clicked', () => {
    const clickeableConfig = { onChange: jest.fn() }

    render(<CheckBox {...clickeableConfig} />)
    const clickCheckBox = screen.getByTestId(basicTestId)

    fireEvent.click(clickCheckBox)
    expect(clickeableConfig.onChange).toHaveBeenCalled()
    expect(clickeableConfig.onChange).toHaveBeenCalledTimes(1)
  })

  test('Should check that it has not been clicked because it is disabled', () => {
    const notClickeableConfig = {
      ...disabledMode,
      onChange: jest.fn()
    }

    render(<CheckBox {...notClickeableConfig} />)
    const disabledCheckBox = screen.getByTestId(basicTestId)

    fireEvent.change(disabledCheckBox)
    expect(notClickeableConfig.onChange).not.toHaveBeenCalled()
    expect(notClickeableConfig.onChange).toHaveBeenCalledTimes(0)
  })
})
