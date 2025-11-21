import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Delete from '.'
// TYPES & INTERFACES
import { DeleteProps } from '@interfaces/atomProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// MOCKS
import { testing } from './index.mocks.json'

describe('Delete', () => {
  const { baseDeleteTestId, sizes } = testing

  test('Should render with required props only', () => {
    render(<Delete />)
    const testIcon = screen.getByTestId(baseDeleteTestId)
    expect(testIcon).toBeInTheDocument()
  })

  test('Should render with different sizes', () => {
    sizes.forEach(_size => {
      const sizedTestId = `test-delete-${_size}`
      const sizedConfig = { size: _size } as DeleteProps

      render(<Delete {...sizedConfig} />)
      const testColorTag = screen.getByTestId(sizedTestId)
      expect(testColorTag.classList).toContain(`${COMMON_CLASSES.IS}${_size}`)
    })
  })
})
