import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Column from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('Column', () => {
  const { basicTestId, testNarrowColumn } = testing

  test('Should render without children', () => {
    render(<Column />)
    const testColumn = screen.getByTestId(basicTestId)
    expect(testColumn).toBeInTheDocument()
  })

  test('Should render the Button with specific classes', () => {
    const classValue = 'is-narrow'
    const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
    render(<Column {...testNarrowColumn} />)
    const testClassColumn = screen.getByTestId(testIdWithClass)
    expect(testClassColumn.className).toContain(classValue)
  })
})
