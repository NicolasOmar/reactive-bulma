import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Title from '.'
// TYPES & INTERFACES
import { TitleProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

describe('Title', () => {
  const { baseConfig, smallSize, sizes, withSubtitle } = mocks.testing

  test('Should render with required props only', () => {
    render(<Title {...(baseConfig as TitleProps)} />)
    const baseTestText = screen.getByText(baseConfig.main.text)
    expect(baseTestText).toBeInTheDocument()
  })

  test('Should be checked by its test id', () => {
    render(<Title {...(smallSize as TitleProps)} />)
    const smallTestId = screen.getByTestId('title-test')
    expect(smallTestId).toBeInTheDocument()
    expect(smallTestId.innerHTML).toEqual(smallSize.main.text)
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const alteredSizeConfig = {
        main: {
          ...baseConfig.main,
          size: _size
        }
      } as TitleProps

      render(<Title {...alteredSizeConfig} />)
      const sizedTestId = screen.getByTestId('title-test')
      expect(sizedTestId).toBeInTheDocument()
      expect(sizedTestId.classList).toContain(_size)
      cleanup()
    })
  })

  test('Should be check by title and subtitle ids', () => {
    render(<Title {...(withSubtitle as TitleProps)} />)
    const titleTestId = screen.getByTestId('title-test')
    const subtitleTestId = screen.getByTestId('subtitle-test')

    expect(titleTestId.innerHTML).toEqual(withSubtitle.main.text)
    expect(subtitleTestId.innerHTML).toEqual(withSubtitle.secondary.text)
  })
})
