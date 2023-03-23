import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Image from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Image', () => {
  const { basicTestId, testSrc, testClasses } = mocks.testing

  test('Should render with required props only', () => {
    render(<Image src={testSrc} />)
    const imageTestId = screen.getByTestId(basicTestId)
    expect(imageTestId).toBeInTheDocument()
  })

  test('Should render the Image with specfic CSS styles', () => {
    Object.keys(testClasses).forEach(prop => {
      const styleValue = (testClasses as any)[prop]
      const styleObj = { [prop]: styleValue }
      render(<Image {...{ src: testSrc, style: styleObj }} />)
      const styleButton = screen.getByTestId(basicTestId)
      expect(styleButton.style[prop as any]).toContain(styleValue)
      cleanup()
    })
  })
})
