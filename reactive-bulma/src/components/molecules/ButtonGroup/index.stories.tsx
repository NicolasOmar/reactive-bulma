import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import ButtonGroup from '.'
// TYPES & INTERFACES
import { ButtonProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  args: testing.basicGroup,
  ...storybook
} as Meta<typeof ButtonGroup>

const Template: StoryFn<typeof ButtonGroup> = args => <ButtonGroup {...args} />

export const BasicGroup = Template.bind({})

export const AttachedButtons = Template.bind({})
AttachedButtons.args = {
  isAttached: true
}

export const RightPositioned = Template.bind({})
RightPositioned.args = {
  position: 'right'
}

export const OneSelectedButton = Template.bind({})
OneSelectedButton.args = {
  ...AttachedButtons.args,
  buttonList: testing.basicGroup.buttonList.map((buttonItem, i) => ({
    ...buttonItem,
    isSelected: i === 2
  })) as ButtonProps[]
}
