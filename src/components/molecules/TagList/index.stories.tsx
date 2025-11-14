import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TagList from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/TagList',
  component: TagList,
  ...storybook,
  args: testing.testTagListStructure
} as Meta<typeof TagList>

const Template: StoryFn<typeof TagList> = args => <TagList {...args} />

export const BasicExample = Template.bind({})
