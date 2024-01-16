import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TabItem from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'
import iconMocks from '../Icon/index.mocks.json'

describe('TabItem', () => {
  const { basicTestId, dummyText } = testing

  test('Should render the component', () => {
    render(<TabItem text={dummyText} />)
    const testTabItem = screen.getByTestId(basicTestId)

    expect(testTabItem).toBeInTheDocument()
  })

  test('Should render an included Icon', () => {
    const tabWithIconConfig = {
      text: dummyText,
      icon: iconMocks.testing.baseConfig
    }
    render(<TabItem {...tabWithIconConfig} />)
    const testIcon = screen.getByTestId(iconMocks.testing.baseIconTestId)

    expect(testIcon).toBeInTheDocument()
  })
})
