import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Footer from '.'
// TYPES & INTERFACES
import { FooterProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Footer', () => {
  const {
    basicContainerTestId,
    basicContentTestId,
    testClasses,
    basicExample
  } = testing

  test('Should render the component', () => {
    render(<Footer {...basicExample} />)
    const testFooterContainer = screen.getByTestId(basicContainerTestId)
    const testFooterContent = screen.getByTestId(basicContentTestId)

    expect(testFooterContainer).toBeInTheDocument()
    expect(testFooterContent).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicContentTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: FooterProps = {
        ...basicExample,
        [name]: value
      }

      render(<Footer {...classTestObject} />)

      const testStylingPropValueFooterGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueFooterGroup.className).toContain(result)
      cleanup()
    })
  })
})
