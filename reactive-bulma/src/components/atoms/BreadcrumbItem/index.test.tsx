import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import BreadcrumbItem from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('BreadcrumbItem', () => {
  const { basicTestId, basicContainerTestId, testText } = testing

  test('Should render the component', () => {
    render(<BreadcrumbItem text={testText} />)
    const testBreadcrumbItem = screen.getByTestId(basicTestId)
    const testContainer = screen.getByTestId(basicContainerTestId)
    const testItemText = screen.getByText(testText)

    expect(testBreadcrumbItem).toBeInTheDocument()
    expect(testContainer).toBeInTheDocument()
    expect(testItemText).toBeInTheDocument()
  })
})
