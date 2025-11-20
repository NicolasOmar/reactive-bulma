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
  size: 'is-large'
}

export const WithDeleteButton = Template.bind({})
WithDeleteButton.args = {
  ...Colored.args,
  withDelete: true
}

export const WithAnAddon = Template.bind({})
WithAnAddon.args = {
  ...Colored.args,
  withAddon: true,
  addonText: 'Addon'
}

export const ColoredAddon = Template.bind({})
ColoredAddon.args = {
  ...WithAnAddon.args,
  addonColor: 'info'
}

export const WithDeleteAddon = Template.bind({})
WithDeleteAddon.args = {
  ...WithAnAddon.args,
  withDelete: true
}
