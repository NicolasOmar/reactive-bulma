import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import PanelTabs from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('PanelTabs', () => {
  const { basicTestId, testTabListConfig } = testing

  test('Should render the component', () => {
    render(<PanelTabs {...testTabListConfig} />)
    const testPanelTabs = screen.getByTestId(basicTestId)

    expect(testPanelTabs).toBeInTheDocument()

    testTabListConfig.tabList.forEach(({ text }) => {
      const testTabItem = screen.getByText(text)
      expect(testTabItem).toBeInTheDocument()
    })
  })

  test('Should render the tab list with last active item', () => {
    const lastTabIsActiveConfig = {
      tabList: testTabListConfig.tabList.map((_tabItem, i, originalist) => ({
        ..._tabItem,
        isActive: ++i === originalist.length
      }))
    }
    render(<PanelTabs {...lastTabIsActiveConfig} />)
    const testPanelTabs = screen.getByTestId(basicTestId)
    expect(testPanelTabs).toBeInTheDocument()

    lastTabIsActiveConfig.tabList.forEach(({ text, isActive }) => {
      const testTabItem = screen.getByText(text)
      expect(testTabItem).toBeInTheDocument()
      if (isActive) {
        expect(testTabItem.className).toContain('is-active')
      }
    })
  })
})
