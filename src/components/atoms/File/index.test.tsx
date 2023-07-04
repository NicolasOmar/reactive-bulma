import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import File from '.'
// TYPES & INTERFACES
// MOCKS
import mocks from './index.mocks.json'

describe('File', () => {
  const { basicTestId, basicTestInputId, testClasses, withFileName } =
    mocks.testing

  test('Should render without any props', () => {
    render(<File />)
    const testFile = screen.getByTestId(basicTestId)
    const testFileInput = screen.getByTestId(basicTestInputId)
    expect(testFile).toBeInTheDocument()
    expect(testFileInput).toBeInTheDocument()
  })

  test('Should render its default icon', () => {
    render(<File />)
    const testDefaultIcon = screen.getByTestId('test-icon-upload-24px')
    expect(testDefaultIcon).toBeInTheDocument()
  })

  test('Should render its file name', () => {
    render(<File {...withFileName} />)
    const testDefaultIcon = screen.getByText(withFileName.fileName)
    expect(testDefaultIcon).toBeInTheDocument()
  })

  test('Should render the component with specfic classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { [prop]: classValue }
      const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
      render(<File {...classObj} />)
      const testClassFile = screen.getByTestId(testIdWithClass)
      expect(testClassFile.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the button has been clicked', () => {
    const clickeableConfig = { onClick: jest.fn() }
    render(<File {...clickeableConfig} />)
    const clickButton = screen.getByTestId(basicTestInputId)
    fireEvent.click(clickButton)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
