import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import BreadcrumbItem from '.'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/BreadcrumbItem',
  component: BreadcrumbItem,
  ...storybook,
  args: {
    text: testing.testText
  }
} as Meta<typeof BreadcrumbItem>

const Template: StoryFn<typeof BreadcrumbItem> = args => (
  <BreadcrumbItem {...args} />
)

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const IsActiveItem = Template.bind({})
IsActiveItem.storyName = 'Active Mode'
IsActiveItem.args = {
  isActiveItem: true
}
