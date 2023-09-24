import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Image from '.'
// MOCKS
import { testing } from './index.mocks.json'

describe('Image', () => {
  const { basicTestId, testSrc } = testing

  test('Should render with required props only', () => {
    render(<Image src={testSrc} />)
    const imageTestId = screen.getByTestId(basicTestId)
    expect(imageTestId).toBeInTheDocument()
  })
})
