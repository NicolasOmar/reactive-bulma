import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TabItem from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'
import iconMocks from '../Icon/index.mocks.json'

export default {
  title: 'Atoms/TabItem',
  component: TabItem,
  ...storybook
} as Meta<typeof TabItem>

const Template: StoryFn<typeof TabItem> = args => <TabItem {...args} />

export const BasicExample = Template.bind({})
BasicExample.args = {
  text: testing.dummyText
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...BasicExample.args,
  icon: iconMocks.testing.baseConfig
}
