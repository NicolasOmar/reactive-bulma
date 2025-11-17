import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import CheckboxGroup from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  ...storybook,
  args: {
    listOfCheckboxes: testing.baseListOfCases
  }
} as Meta<typeof CheckboxGroup>

const Template: StoryFn<typeof CheckboxGroup> = args => (
  <CheckboxGroup {...args} />
)

export const BasicExample = Template.bind({})
