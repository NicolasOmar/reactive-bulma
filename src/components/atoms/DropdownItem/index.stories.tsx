import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import DropdownItem from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/DropdownItem',
  component: DropdownItem,
  ...storybook,
  args: {
    itemText: testing.testText
  }
} as Meta<typeof DropdownItem>

const Template: StoryFn<typeof DropdownItem> = args => (
  <DropdownItem {...args} />
)

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
