import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Dropdown from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  ...storybook,
  args: testing.testConfig
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const AllAreLinks = Template.bind({})
AllAreLinks.storyName = 'Link Items'
AllAreLinks.args = {
  listOfItems: testing.testConfig.listOfItems.map(itemConfig => ({
    ...itemConfig,
    type: 'link'
  }))
}
