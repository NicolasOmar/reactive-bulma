import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Icon from '.'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
import { sizeType } from '../../../types/styleTypes'
import { IconSizeEnum } from '../../../types/componentEnums'
// MOCKS
import mocks from './index.mocks.json'

describe('Icon', () => {
  const { baseIconTestId, baseConfig, textIncluded, sizes, testClasses } =
    mocks.testing

  test('Should render with required props only', () => {
    render(<Icon {...({ ...baseConfig } as IconProps)} />)
    const testIcon = screen.getByTestId(baseIconTestId)
    expect(testIcon).toBeInTheDocument()
  })

  test('Should render with a inserted text', () => {
    const configWithText = { ...baseConfig, ...textIncluded } as IconProps
    render(<Icon {...configWithText} />)

    const testIconWithText = screen.getByText(textIncluded.text)
    expect(testIconWithText).toBeInTheDocument()
    expect(testIconWithText.innerHTML).toBe(textIncluded.text)
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const sizedTestId = `test-icon-home-${
        IconSizeEnum[_size as Exclude<sizeType, 'is-normal'>]
      }px`
      const sizedConfig = { ...baseConfig, size: _size } as IconProps

      render(<Icon {...sizedConfig} />)
      const testColorTag = screen.getByTestId(sizedTestId)
      expect(testColorTag.classList).toContain(_size)
    })
  })

  test('Should render with different classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as any)[prop]
      const testIdWithClass = `test-icon-home-${classValue}-24px-i`
      const classConfig = { ...baseConfig, [prop]: classValue }

      render(<Icon {...classConfig} />)
      const classButton = screen.getByTestId(testIdWithClass)
      expect(classButton.className).toContain(classValue)
    })
  })
})
