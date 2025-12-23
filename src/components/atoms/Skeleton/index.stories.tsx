import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Skeleton from '.'
// TYPES & INTERFACES
// CONSTANTS
// FUNCTIONS
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  ...storybook,
  args: {
    children: <div>Test Example</div>
  }
} as Meta<typeof Skeleton>

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />

export const BasicExample = Template.bind({})

export const BlockWithSeveralChildren = Template.bind({})
BlockWithSeveralChildren.args = {
  displayType: 'block',
  children: (
    <>
      <div>Test Example 1</div>
      <div>Test Example 2</div>
      <div>Test Example 3</div>
    </>
  )
}

export const LinesWithSeveralChildren = Template.bind({})
LinesWithSeveralChildren.args = {
  ...BlockWithSeveralChildren.args,
  displayType: 'lines'
}
