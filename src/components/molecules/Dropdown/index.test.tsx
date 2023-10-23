import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// COMPONENTS
import Dropdown from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('Dropdown', () => {
  const { basicTestId, triggerTestId, testConfig } = testing

  test('Should render the component', () => {
    render(<Dropdown {...testConfig} />)
    const testDropdown = screen.getByTestId(basicTestId)
    expect(testDropdown).toBeInTheDocument()
  })

  test('Should render the menu with its items when its input is clicked', async () => {
    render(<Dropdown {...testConfig} />)
    const clickeableDropdown = screen.getByTestId(triggerTestId)

    await userEvent.click(clickeableDropdown)

    waitFor(() => {
      testConfig.listOfItems.forEach(({ itemText }) => {
        const displayedMenuItem = screen.getByText(itemText)
        expect(displayedMenuItem).toBeInTheDocument()
      })
    })
  })
})
