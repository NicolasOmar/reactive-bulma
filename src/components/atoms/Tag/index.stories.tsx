import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENTS
import Tag from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With a text'
BasicExample.args = { ...mocks.test.baseConfig }

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = {
  ...BasicExample.args,
  color: 'is-danger'
}

export const Rounded = Template.bind({})
Rounded.storyName = 'Rounded'
Rounded.args = {
  ...Colored.args,
  isRounded: true
}

export const Light = Template.bind({})
Light.storyName = 'Light color'
Light.args = {
  ...Colored.args,
  isLight: true
}

export const LargeSize = Template.bind({})
LargeSize.storyName = 'Large Size'
LargeSize.args = {
  ...Colored.args,
  size: 'is-large'
}

export const WithDelete = Template.bind({})
WithDelete.storyName = 'With a Delete'
WithDelete.args = {
  ...Colored.args,
  withDelete: true
}

export const WithAddon = Template.bind({})
WithAddon.storyName = 'With an Addon'
WithAddon.args = {
  ...Colored.args,
  withAddon: true,
  addonText: 'Addon'
}

export const ColoredAddon = Template.bind({})
ColoredAddon.storyName = 'Colored Addon'
ColoredAddon.args = {
  ...WithAddon.args,
  addonColor: 'is-info'
}

export const WithDeleteAddon = Template.bind({})
WithDeleteAddon.storyName = 'With a Delete Addon'
WithDeleteAddon.args = {
  ...WithAddon.args,
  withDelete: true
}
