import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import DropdownTrigger from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/DropdownTrigger',
  component: DropdownTrigger,
  ...storybook,
  args: {
    menuText: testing.testMenuText
  }
} as Meta<typeof DropdownTrigger>

const Template: StoryFn<typeof DropdownTrigger> = args => (
  <DropdownTrigger {...args} />
)

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
