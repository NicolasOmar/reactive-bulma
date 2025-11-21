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
  const {
    basicTestId,
    addonTestId,
    deleteTestId,
    baseConfig,
    colors,
    testClasses,
    testAddonClasses,
    sizes
  } = testing
  let tagConfig: TagWithAddonProps = baseConfig

  test('Should render with required props only', () => {
    render(<TagWithAddon {...tagConfig} />)
    const testTag = screen.getByText(tagConfig.text)
    expect(testTag).toBeInTheDocument()
  })

  test('Should render with different colors', () => {
    colors.forEach(_color => {
      const coloredTestId = `${basicTestId}-${_color}`
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

  test('Should render the tag section with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace('is-', '')}`
      const classTestObject: TagWithAddonProps = {
        ...baseConfig,
        [name]: value
      }

      render(<TagWithAddon {...classTestObject} />)

      const testClassNotification = screen.getByTestId(testIdWithClass)
      expect(testClassNotification.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the addon section with specific classes', () => {
    testAddonClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${addonTestId}-${result.replace('is-', '')}`
      const classTestObject: TagWithAddonProps = {
        ...baseConfig,
        [name]: value
      }

      render(<TagWithAddon {...classTestObject} />)

      const testClassNotification = screen.getByTestId(testIdWithClass)
      expect(testClassNotification.className).toContain(result)
      cleanup()
    })
  })

  test('Should check that its delete button has been clicked', () => {
    tagConfig = { ...baseConfig, withDelete: true, onDeleteClick: jest.fn() }
    render(<TagWithAddon {...tagConfig} />)

    const clickButton = screen.getByTestId(deleteTestId)
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

    const clickButton = screen.getByTestId(deleteTestId)
    fireEvent.click(clickButton)
    expect(tagConfig.onDeleteClick).toHaveBeenCalled()
    expect(tagConfig.onDeleteClick).toHaveBeenCalledTimes(1)
  })
})
