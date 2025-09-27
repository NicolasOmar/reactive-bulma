import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Media from '.'
import { Delete, Image, TextArea } from '@components/atoms'
// TYPES & INTERFACES
import { MediaProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'
import imageMocks from '@components/atoms/Image/index.mocks.json'

describe('Media', () => {
  const {
    basicTestId,
    basicTestLeftId,
    basicTestContentId,
    basicTestRightId,
    elementTestIds
  } = testing

  test('Should render the component', () => {
    render(<Media />)
    const testMedia = screen.getByTestId(basicTestId)

    expect(testMedia).toBeInTheDocument()
    expect(() => screen.getByTestId(basicTestLeftId)).toThrow()
    expect(() => screen.getByTestId(basicTestContentId)).toThrow()
    expect(() => screen.getByTestId(basicTestRightId)).toThrow()
  })

  test('Should render the component with its content fulfilled', () => {
    const mediaContentConfig = {
      leftContent: (
        <Image
          src={imageMocks.testing.testSrc}
          fixedSize={'is-128x128'}
        />
      ),
      centerContent: <TextArea />,
      rightContent: <Delete />
    } as MediaProps

    render(<Media {...mediaContentConfig} />)
    const testMediaLeftContainer = screen.getByTestId(basicTestLeftId)
    const testMediaCenterContainer = screen.getByTestId(basicTestContentId)
    const testMediaRightContainer = screen.getByTestId(basicTestRightId)

    expect(testMediaLeftContainer).toBeInTheDocument()
    expect(testMediaCenterContainer).toBeInTheDocument()
    expect(testMediaRightContainer).toBeInTheDocument()

    elementTestIds.forEach(_singleElementTestId => {
      const testMediaElement = screen.getByTestId(_singleElementTestId)
      expect(testMediaElement).toBeInTheDocument()
    })
  })
})
