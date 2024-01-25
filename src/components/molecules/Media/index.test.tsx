import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Media from '.'
// TYPES & INTERFACES
import { MediaProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'
import imageMocks from '../../atoms/Image/index.mocks.json'

describe('Media', () => {
  const { basicTestId } = testing
  const basicConfig = {
    mediaImage: {
      src: imageMocks.testing.testSrc
    }
  } as MediaProps

  test('Should render the component', () => {
    render(<Media {...basicConfig} />)
    const testMedia = screen.getByTestId(basicTestId)

    expect(testMedia).toBeInTheDocument()
  })
})
