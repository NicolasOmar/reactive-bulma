import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Tag from '.'
// TYPES & INTERFACES
import { ColorType, BaseSizeType } from '@customTypes/styleTypes'
import { TagProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// MOCKS
import { testing } from './index.mocks.json'

describe('Tag', () => {
  const { baseConfig, colors, testClasses, sizes } = testing
  let tagConfig: TagProps = baseConfig

  test('Should render with required props only', () => {
    render(<Tag {...tagConfig} />)
    const testTag = screen.getByText(tagConfig.text)
    expect(testTag).toBeInTheDocument()
  })

  test('Should render with different colors', () => {
    colors.forEach(_color => {
      const coloredTestId = `test-tag-${_color}`
      const testColoredConfig = {
        ...baseConfig,
        color: _color as ColorType
      }

      render(<Tag {...testColoredConfig} />)
      const testColorTag = screen.getByTestId(coloredTestId)
      expect(testColorTag.classList).toContain(`${COMMON_CLASSES.IS}${_color}`)
    })
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const resizedTestId = `test-tag-${_size}`
      const testResizedConfig = {
        ...baseConfig,
        size: _size as BaseSizeType
      }

      render(<Tag {...testResizedConfig} />)
      const testSizedTag = screen.getByTestId(resizedTestId)
      expect(testSizedTag.classList).toContain(`${COMMON_CLASSES.IS}${_size}`)
    })
  })

  test('Should render with different classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const testIdWithClass = `test-tag-${classValue.replace('is-', '')}`
      const testClassConfig = { ...baseConfig, [prop]: classValue }

      render(<Tag {...testClassConfig} />)
      const classButton = screen.getByTestId(testIdWithClass)
      expect(classButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that its delete button has been clicked', () => {
    tagConfig = { ...baseConfig, withDelete: true, onDeleteClick: jest.fn() }
    render(<Tag {...tagConfig} />)

    const clickButton = screen.getByTestId('test-tag-delete')
    fireEvent.click(clickButton)
    expect(tagConfig.onDeleteClick).toHaveBeenCalled()
    expect(tagConfig.onDeleteClick).toHaveBeenCalledTimes(1)
  })
})
