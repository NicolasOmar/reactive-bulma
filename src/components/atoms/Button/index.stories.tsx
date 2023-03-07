import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENT
import Button from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const NoText = Template.bind({})
NoText.storyName = 'No Text'

export const WithText = Template.bind({})
WithText.storyName = 'With Text'
WithText.args = {
  text: mocks.dummyText
}

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = {
  ...WithText.args,
  color: 'is-danger'
}

export const InvertedColor = Template.bind({})
InvertedColor.storyName = 'Inverted Color'
InvertedColor.args = {
  ...Colored.args,
  isInvertedColor: true
}

export const Outlined = Template.bind({})
Outlined.storyName = 'Oultined Color'
Outlined.args = {
  ...Colored.args,
  isOutlined: true
}

export const Rounded = Template.bind({})
Rounded.storyName = 'Rounded'
Rounded.args = {
  ...Colored.args,
  isRounded: true
}

export const Loading = Template.bind({})
Loading.storyName = 'Loading State'
Loading.args = {
  ...Colored.args,
  isLoading: true
}

export const LargeSize = Template.bind({})
LargeSize.storyName = 'Large Size'
LargeSize.args = {
  ...Colored.args,
  size: 'is-large'
}

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = {
  ...Colored.args,
  isDisabled: true
}

export const Static = Template.bind({})
Static.storyName = 'Static'
Static.args = {
  ...Colored.args,
  isStatic: true
}
