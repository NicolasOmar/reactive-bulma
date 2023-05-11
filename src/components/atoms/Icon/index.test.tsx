import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENT
import Icon from '.'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

describe('Icon', () => {
  const { baseExample } = mocks.testing
  test('Should render with required props only', () => {
    render(<Icon {...({ ...baseExample } as IconProps)} />)
    const testIcon = screen.getByTestId('test-icon-home-24px')
    expect(testIcon).toBeInTheDocument()
  })
})
