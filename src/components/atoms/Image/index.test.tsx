import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Image from '.'
// MOCKS
import mocks from './index.mocks.json'

describe('Image', () => {
  const { basicTestId, testSrc } = mocks.testing

  test('Should render with required props only', () => {
    render(<Image src={testSrc} />)
    const imageTestId = screen.getByTestId(basicTestId)
    expect(imageTestId).toBeInTheDocument()
  })
})
