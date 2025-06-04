import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import PanelTabs from '.'
// TYPES & INTERFACES
import { PanelTabsProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/PanelTabs',
  component: PanelTabs,
  ...storybook,
  args: testing.testTabListConfig as PanelTabsProps
} as Meta<typeof PanelTabs>

const Template: StoryFn<typeof PanelTabs> = args => <PanelTabs {...args} />

export const BasicExample = Template.bind({})

export const LastTabIsActive = Template.bind({})
LastTabIsActive.args = {
  tabList: testing.testTabListConfig.tabList.map(
    (_tabItem, i, originalist) => ({
      ..._tabItem,
      isActive: ++i === originalist.length
    })
  )
}
