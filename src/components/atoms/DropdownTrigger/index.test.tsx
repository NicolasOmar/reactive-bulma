import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import DropdownTrigger from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('DropdownTrigger', () => {
  const { testMenuText, basicTestId, basicContainerTestId } = testing

  test('Should render the component', () => {
    render(<DropdownTrigger menuText={testMenuText} />)
    const testDropdownTrigger = screen.getByTestId(basicTestId)
    const testDropdownTriggerContainer =
      screen.getByTestId(basicContainerTestId)

    expect(testDropdownTrigger).toBeInTheDocument()
    expect(testDropdownTriggerContainer).toBeInTheDocument()
  })
})
