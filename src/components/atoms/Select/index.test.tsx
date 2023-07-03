import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Select from '.'
// TYPES & INTERFACES
import { SelectProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

const getTestIds = (baseTestId: string) => [
  screen.getByTestId(baseTestId),
  screen.getByTestId(`${baseTestId}-container`)
]

describe('Select', () => {
  const { basicTestId, oneOption, severalOptions, testClasses } = mocks.testing

  test('Should render without any props', () => {
    render(<Select />)
    const [testSelect, testSelectContainer] = getTestIds(basicTestId)
    expect(testSelect).toBeInTheDocument()
    expect(testSelectContainer).toBeInTheDocument()
  })

  test('Should render with one option', () => {
    render(<Select {...oneOption} />)
    oneOption.options.forEach((_, i) => {
      const testOption = screen.getByTestId(`${basicTestId}-option-${i}`)
      expect(testOption).toBeInTheDocument()
    })
  })

  test('Should render with several options', () => {
    render(<Select {...severalOptions} />)
    severalOptions.options.forEach((_, i) => {
      const testOption = screen.getByTestId(`${basicTestId}-option-${i}`)
      expect(testOption).toBeInTheDocument()
    })
  })

  test('Should render with specfic classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { [prop]: classValue } as SelectProps
      const testIdWithClass = `${basicTestId}-${classValue.replace(
        'is-',
        ''
      )}-container`

      render(<Select {...classObj} />)
      const testClassInput = screen.getByTestId(testIdWithClass)
      expect(testClassInput.className).toContain(classValue)
      cleanup()
    })
  })
})
