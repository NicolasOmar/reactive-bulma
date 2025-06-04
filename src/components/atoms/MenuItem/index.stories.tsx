import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import MenuItem from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  ...storybook,
  args: {
    text: testing.testMenuItemText
  }
} as Meta<typeof MenuItem>

const Template: StoryFn<typeof MenuItem> = args => <MenuItem {...args} />

export const BasicExample = Template.bind({})

export const Active = Template.bind({})
Active.args = {
  isActive: true
}
