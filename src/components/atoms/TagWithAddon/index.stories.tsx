import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TagWithAddon from '.'
// TYPES & INTERFACES
// CONSTANTS
// FUNCTIONS
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/TagWithAddon',
  component: TagWithAddon,
  args: testing.baseConfig,
  ...storybook
} as Meta<typeof TagWithAddon>

const Template: StoryFn<typeof TagWithAddon> = args => (
  <TagWithAddon {...args} />
)

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

export const ColoredAddon = Template.bind({})
ColoredAddon.args = {
  ...Colored.args,
  addonColor: 'info'
}

export const WithDeleteButton = Template.bind({})
WithDeleteButton.args = {
  ...Colored.args,
  withDelete: true
}
