import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
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

export const CurrentCase = Template.bind({})
CurrentCase.args = {
  isCurrent: true
}

export const CustomLabelText = Template.bind({})
CustomLabelText.args = {
  labelText: 'Site N°'
}

export const CustomCurrentLabelText = Template.bind({})
CustomCurrentLabelText.args = {
  ...CurrentCase.args,
  currentLabelText: 'Send to site N°'
}
