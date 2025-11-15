import React from 'react'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// COMPONENTS
import Dropdown from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('Dropdown', () => {
  const { basicTestId, triggerTestId, testClasses, testConfig } = testing

  test('Should render the component', () => {
    render(<Dropdown {...testConfig} />)
    const testDropdown = screen.getByTestId(basicTestId)
    expect(testDropdown).toBeInTheDocument()
  })

  test('Should render the button with specific classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { [prop]: classValue }
      const testIdWithClass = `${basicTestId}-${classValue.replace('is-', '')}`
      render(<Dropdown {...{ ...classObj, ...testConfig }} />)
      const testClassDropdown = screen.getByTestId(testIdWithClass)
      expect(testClassDropdown.className).toContain(classValue)
      cleanup()
    })
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
