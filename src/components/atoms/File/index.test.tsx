import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import File from '.'
// TYPES & INTERFACES
// MOCKS
import mocks from './index.mocks.json'

describe('File', () => {
  const { basicTestId, basicTestInputId, testClasses } = mocks.testing

  test('Should render without any props', () => {
    render(<File />)
    const testFile = screen.getByTestId(basicTestId)
    const testFileInput = screen.getByTestId(basicTestInputId)
    expect(testFile).toBeInTheDocument()
    expect(testFileInput).toBeInTheDocument()
  })

  test('Should render the Button with specfic classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { [prop]: classValue }
      const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
      render(<File {...classObj} />)
      const testClassButton = screen.getByTestId(testIdWithClass)
      expect(testClassButton.className).toContain(classValue)
      cleanup()
    })
  })
})
