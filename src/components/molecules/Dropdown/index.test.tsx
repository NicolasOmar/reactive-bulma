import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// COMPONENTS
import Dropdown from '.'
// TYPES & INTERFACES
import { DropdownItemProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

const testMenuItemsExists = (listOfItems: DropdownItemProps[]) =>
  listOfItems.forEach(({ itemText }) => {
    const displayedMenuItem = screen.getByText(itemText)
    expect(displayedMenuItem).toBeInTheDocument()
  })

describe('Dropdown', () => {
  const { basicTestId, testConfig } = testing

  test('Should render the component', () => {
    render(<Dropdown {...testConfig} />)
    const testDropdown = screen.getByTestId(basicTestId)
    expect(testDropdown).toBeInTheDocument()
  })

  test('Should render the menu with its items when if dropdown is already active', async () => {
    const activeConfig = { ...testConfig, isActive: true }
    render(<Dropdown {...activeConfig} />)

    testMenuItemsExists(testConfig.listOfItems)
  })

  test('Should render the menu with its items when its input is clicked', async () => {
    const triggerTestId = 'test-button'
    render(<Dropdown {...testConfig} />)
    const clickeableDropdown = screen.getByTestId(triggerTestId)

    await userEvent.click(clickeableDropdown)

    waitFor(() => {
      testMenuItemsExists(testConfig.listOfItems)
    })
  })
})
