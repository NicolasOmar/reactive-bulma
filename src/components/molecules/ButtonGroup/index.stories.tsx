import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import ButtonGroup from '.'
// MOCKS
import { testing } from './index.mocks.json'

export default {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  args: testing.basicGroup
} as Meta<typeof ButtonGroup>

const Template: StoryFn<typeof ButtonGroup> = args => <ButtonGroup {...args} />

export const BasicGroup = Template.bind({})
BasicGroup.storyName = 'Basic Group'

export const AttachedButtons = Template.bind({})
AttachedButtons.storyName = 'Attached Buttons'
AttachedButtons.args = {
  isAttached: true
}

export const RightPositioned = Template.bind({})
RightPositioned.storyName = 'Positioned'
RightPositioned.args = {
  position: 'right'
}
