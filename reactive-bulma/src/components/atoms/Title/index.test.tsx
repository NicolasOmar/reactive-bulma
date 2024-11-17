import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Title from '.'
// TYPES & INTERFACES
import { TitleProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Title', () => {
  const { baseConfig, smallSize, sizes, withSubtitle } = testing

  test('Should not render by passing no props', () => {
    render(<Title />)
    expect(() => screen.getByText(baseConfig.main.text)).toThrow()
  })

  test('Should render with main config only', () => {
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
          testId: _size,
          size: _size
        }
      } as TitleProps

      render(<Title {...alteredSizeConfig} />)
      const sizedTestId = screen.getByTestId(_size)
      expect(sizedTestId).toBeInTheDocument()
      expect(sizedTestId.classList).toContain(_size)
    })
  })

  test('Should be check by title and subtitle ids', () => {
    render(<Title {...(withSubtitle as TitleProps)} />)
    const titleTestId = screen.getByTestId('title-test')
    const subtitleTestId = screen.getByTestId('subtitle-test')

    expect(titleTestId.innerHTML).toEqual(withSubtitle.main.text)
    expect(subtitleTestId.innerHTML).toEqual(withSubtitle.secondary.text)
  })

  test('Should be check the title with spaced css class', () => {
    const spacedConfig = {
      ...withSubtitle,
      main: {
        ...withSubtitle.main,
        isSpaced: true
      }
    } as TitleProps

    render(<Title {...spacedConfig} />)
    const titleTestId = screen.getByTestId('title-test')
    expect(titleTestId.classList).toContain('is-spaced')
  })
})
