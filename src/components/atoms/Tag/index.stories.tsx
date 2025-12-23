import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Tag from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  args: testing.baseConfig,
  ...storybook
} as Meta<typeof Tag>

const Template: StoryFn<typeof Tag> = args => <Tag {...args} />

export const BasicExample = Template.bind({})

export const Colored = Template.bind({})
Colored.args = {
  ...BasicExample.args,
  color: 'danger'
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Colored.args,
  isRounded: true
}

export const LightColor = Template.bind({})
LightColor.args = {
  ...Colored.args,
  isLight: true
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...Colored.args,
  size: 'large'
}

export const Skeleton = Template.bind({})
Skeleton.args = {
  ...LargeSize.args,
  isSkeleton: true
}

export const WithDeleteButton = Template.bind({})
WithDeleteButton.args = {
  ...Colored.args,
  withDelete: true
}
