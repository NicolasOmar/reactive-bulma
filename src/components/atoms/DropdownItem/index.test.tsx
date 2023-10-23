import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import DropdownItem from '.'
// TYPES & INTERFACES
import { DropdownItemProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('DropdownItem', () => {
  const { basicTestId, testText, testTypes } = testing

  test('Should render the component', () => {
    render(<DropdownItem itemText={testText} />)
    const testDropdownItem = screen.getByTestId(basicTestId)
    expect(testDropdownItem).toBeInTheDocument()
  })

  test('Should render the component with each specific types', () => {
    testTypes.forEach(({ type, tag }) => {
      const customTestId = basicTestId.replace('-item-item', `-item-${type}`)
      const testTypeConfig = {
        testId: customTestId,
        itemText: testText,
        type
      } as DropdownItemProps

      render(<DropdownItem {...testTypeConfig} />)

      const testTypeDropdownItem = screen.getByTestId(customTestId)
      expect(testTypeDropdownItem).toBeInTheDocument()
      expect(testTypeDropdownItem.tagName).toBe(tag.toUpperCase())
      cleanup()
    })
  })

  test('Should check that the button has been clicked', () => {
    const clickeableConfig = { itemText: testText, onClick: jest.fn() }

    render(<DropdownItem {...clickeableConfig} />)
    const clickDropdownItem = screen.getByTestId(basicTestId)

    fireEvent.click(clickDropdownItem)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })

  test('Should check that the dropdown is active', () => {
    const activeItemConfig = { itemText: testText, isActiveItem: true }
    const activeItemTestConfig = basicTestId.replace(
      '-item-item',
      '-item-active-item'
    )

    render(<DropdownItem {...activeItemConfig} />)
    const activeDropdownItem = screen.getByTestId(activeItemTestConfig)

    expect(activeDropdownItem.classList).toContain('is-active')
  })
})
