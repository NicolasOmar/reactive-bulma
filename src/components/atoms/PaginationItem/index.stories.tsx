import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import PaginationItem from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/PaginationItem',
  component: PaginationItem,
  ...storybook,
  args: testing.basicText
} as Meta<typeof PaginationItem>

const Template: StoryFn<typeof PaginationItem> = args => (
  <PaginationItem {...args} />
)

export const BasicExample = Template.bind({})

export const Selected = Template.bind({})
Selected.args = {
  isSelected: true
}

export const CustomLabelText = Template.bind({})
CustomLabelText.args = {
  labelText: 'Site N°'
}

export const SelectedWithCustomLabelText = Template.bind({})
SelectedWithCustomLabelText.args = {
  ...Selected.args,
  currentLabelText: 'Send to site N°'
}
