import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TagWithAddon from '.'
// TYPES & INTERFACES
import { TagWithAddonProps } from '@interfaces/atomProps'
// CONSTANTS
import { BaseSizeType, ColorType } from '@customTypes/styleTypes'
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('TagWithAddon', () => {
  const { baseConfig, colors, testClasses, sizes } = testing
  let tagConfig: TagWithAddonProps = baseConfig

  test('Should render with required props only', () => {
    render(<TagWithAddon {...tagConfig} />)
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

      render(<TagWithAddon {...testColoredConfig} />)
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

      render(<TagWithAddon {...testResizedConfig} />)
      const testSizedTag = screen.getByTestId(resizedTestId)
      expect(testSizedTag.classList).toContain(`${COMMON_CLASSES.IS}${_size}`)
    })
  })

  test('Should render with different classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const testIdWithClass = `test-tag-${classValue.replace('is-', '')}`
      const testClassConfig = { ...baseConfig, [prop]: classValue }

      render(<TagWithAddon {...testClassConfig} />)
      const classButton = screen.getByTestId(testIdWithClass)
      expect(classButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that its delete button has been clicked', () => {
    tagConfig = { ...baseConfig, withDelete: true, onDeleteClick: jest.fn() }
    render(<TagWithAddon {...tagConfig} />)

    const clickButton = screen.getByTestId('test-tags-delete')
    fireEvent.click(clickButton)
    expect(tagConfig.onDeleteClick).toHaveBeenCalled()
    expect(tagConfig.onDeleteClick).toHaveBeenCalledTimes(1)
  })

  test('Should render the tags variation with its addon text', () => {
    const tagsTestId = 'test-tags'

    render(<TagWithAddon {...tagConfig} />)
    const testTags = screen.getByTestId(tagsTestId)
    expect(testTags).toBeInTheDocument()
  })

  test('Should check that its delete button has been clicked with the tags variation', () => {
    tagConfig = {
      ...baseConfig,
      withDelete: true,
      onDeleteClick: jest.fn()
    }
    render(<TagWithAddon {...tagConfig} />)

    const clickButton = screen.getByTestId('test-tags-delete')
    fireEvent.click(clickButton)
    expect(tagConfig.onDeleteClick).toHaveBeenCalled()
    expect(tagConfig.onDeleteClick).toHaveBeenCalledTimes(1)
  })
})
