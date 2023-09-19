import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import ButtonGroup from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  argTypes: storybook,
  args: testing.basicGroup
} as Meta<typeof ButtonGroup>

const Template: StoryFn<typeof ButtonGroup> = args => <ButtonGroup {...args} />

export const BasicGroup = Template.bind({})
BasicGroup.storyName = 'Basic Group'
