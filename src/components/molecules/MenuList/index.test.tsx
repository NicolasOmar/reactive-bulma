import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import MenuList from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'
import { MenuItemProps } from '../../../interfaces/atomProps'

describe('MenuList', () => {
  const { basicTestId } = testing
  const testItemList: MenuItemProps[] = Array(5).fill({ text: 'hello' })

  test('Should render the component', () => {
    render(<MenuList itemList={testItemList} />)
    const testMenuList = screen.getByTestId(basicTestId)
    expect(testMenuList).toBeInTheDocument()
  })

  test('Should render the component with a sublist of items', () => {
    const subTitleText = 'Hello title'
    const subTitleItemText = 'hello sub item'
    const subListConfig = {
      itemList: [
        {
          subListTitle: { text: subTitleText },
          subItems: Array(5).fill({ text: subTitleItemText })
        }
      ]
    }
    render(<MenuList {...subListConfig} />)
    screen.debug()
    const testMenuMainItem = screen.getByText(subTitleText)
    expect(testMenuMainItem).toBeInTheDocument()
    const testMenuListItems = screen.getAllByText(subTitleItemText)
    expect(testMenuListItems.length).toBe(5)
  })
})
