import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Tag from '.'
// TYPES & INTERFACES
import {
  BasicColorType,
  SizeWithoutNormalType
} from '../../../types/styleTypes'
import { TagProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Tag', () => {
  const { baseConfig, colors, testClasses, addonConfig, sizes } = testing
  let tagConfig: TagProps = baseConfig

  test('Should render with required props only', () => {
    render(<Tag {...tagConfig} />)
    const testTag = screen.getByText(tagConfig.text)
    expect(testTag).toBeInTheDocument()
  })

  test('Should render with different colors', () => {
    colors.forEach(_color => {
      const coloredTestId = `test-tag-${_color.replace('is-', '')}`
      const testColoredConfig = {
        ...baseConfig,
        color: _color as BasicColorType
      }

      render(<Tag {...testColoredConfig} />)
      const testColorTag = screen.getByTestId(coloredTestId)
      expect(testColorTag.classList).toContain(_color)
    })
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const resizedTestId = `test-tag-${_size.replace('is-', '')}`
      const testResizedConfig = {
        ...baseConfig,
        size: _size as SizeWithoutNormalType
      }

      render(<Tag {...testResizedConfig} />)
      const testSizedTag = screen.getByTestId(resizedTestId)
      expect(testSizedTag.classList).toContain(_size)
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

  test('Should render the tags variation with its addon text', () => {
    const tagsTestId = 'test-tags-has-addons'

    render(<Tag {...{ ...baseConfig, ...addonConfig }} />)
    const testTags = screen.getByTestId(tagsTestId)
    expect(testTags).toBeInTheDocument()
  })

  test('Should check that its delete button has been clicked with the tags variation', () => {
    tagConfig = {
      ...baseConfig,
      withAddon: true,
      withDelete: true,
      onDeleteClick: jest.fn()
    }
    render(<Tag {...tagConfig} />)

    const clickButton = screen.getByTestId('test-tags-has-addons-delete')
    fireEvent.click(clickButton)
    expect(tagConfig.onDeleteClick).toHaveBeenCalled()
    expect(tagConfig.onDeleteClick).toHaveBeenCalledTimes(1)
  })
})
