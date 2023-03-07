import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Tag from '.'
// TYPES & INTERFACES
import { basicColorType } from '../../../types/styleTypes'
import { TagProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

describe('Tag', () => {
  let tagConfig: TagProps = { text: mocks.test.testText }

  test('Should render with required props only', () => {
    render(<Tag {...tagConfig} />)
    const testTag = screen.getByText(mocks.test.testText)
    expect(testTag).toBeInTheDocument()
  })

  test('Should render with different colors', () => {
    mocks.test.colors.forEach(_color => {
      tagConfig = { text: mocks.test.testText, color: _color as basicColorType }
      render(<Tag {...tagConfig} />)
      const testColorTag = screen.getByTestId(
        `test-tag-${_color.replace('is-', '')}-medium`
      )
      expect(testColorTag.classList).toContain(_color)
    })
  })
})
