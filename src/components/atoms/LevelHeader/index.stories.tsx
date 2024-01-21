import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import LevelHeader from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/LevelHeader',
  component: LevelHeader,
  ...storybook,
  args: testing.basicConfig
} as Meta<typeof LevelHeader>

const Template: StoryFn<typeof LevelHeader> = args => <LevelHeader {...args} />

export const BasicExample = Template.bind({})

export const NumericExample = Template.bind({})
NumericExample.args = testing.numericConfig
