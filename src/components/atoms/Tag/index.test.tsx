import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Tag from '.'
// TYPES & INTERFACES
import { basicColorType, sizeType } from '../../../types/styleTypes'
import { TagProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

describe('Tag', () => {
  const { baseConfig, colors, testClasses, addonConfig, sizes } = mocks.test
  let tagConfig: TagProps = baseConfig

  test('Should render with required props only', () => {
    render(<Tag {...tagConfig} />)
    const testTag = screen.getByText(tagConfig.text)
    expect(testTag).toBeInTheDocument()
  })

  test('Should render with different colors', () => {
    colors.forEach(_color => {
      const coloredTestId = `test-tag-${_color.replace('is-', '')}`
      render(<Tag {...{ ...baseConfig, color: _color as basicColorType }} />)
      const testColorTag = screen.getByTestId(coloredTestId)
      expect(testColorTag.classList).toContain(_color)
    })
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const coloredTestId = `test-tag-${_size.replace('is-', '')}`
      render(
        <Tag
          {...{ ...baseConfig, size: _size as Exclude<sizeType, 'is-normal'> }}
        />
      )
      const testColorTag = screen.getByTestId(coloredTestId)
      expect(testColorTag.classList).toContain(_size)
    })
  })

  test('Should render with different classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as any)[prop]
      const testIdWithClass = `test-tag-${classValue.replace('is-', '')}`
      render(<Tag {...{ ...baseConfig, [prop]: classValue }} />)
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
