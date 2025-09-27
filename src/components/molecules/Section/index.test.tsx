import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Section from '.'
// TYPES & INTERFACES
import { SectionProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Section', () => {
  const { basicTestId, testClasses, basicContentConfig } = testing

  test('Should render the component', () => {
    render(<Section {...basicContentConfig} />)
    const testSection = screen.getByTestId(basicTestId)

    expect(testSection).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: SectionProps = {
        ...basicContentConfig,
        [name]: value
      }

      render(<Section {...classTestObject} />)

      const testStylingPropValueSectionGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueSectionGroup.className).toContain(result)
      cleanup()
    })
  })
})
