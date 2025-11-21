import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// TYPES & INTERFACES
import { ColumnProps } from '@interfaces/atomProps'
// COMPONENTS
import Column from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('Column', () => {
  const { basicTestId, testClasses } = testing

  test('Should render without children', () => {
    render(<Column />)
    const testColumn = screen.getByTestId(basicTestId)
    expect(testColumn).toBeInTheDocument()
  })

  test('Should render the notification group with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace('is-', '')}`
      const classTestObject: ColumnProps = { [name]: value }

      render(<Column {...classTestObject} />)

      const testClassNotification = screen.getByTestId(testIdWithClass)
      expect(testClassNotification.className).toContain(result)
      cleanup()
    })
  })
})
