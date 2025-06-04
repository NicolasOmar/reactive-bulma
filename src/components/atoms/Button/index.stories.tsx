import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Button from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Button',
  component: Button,
  ...storybook
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const NoText = Template.bind({})

export const WithText = Template.bind({})
WithText.args = {
  text: testing.dummyText
}

export const Colored = Template.bind({})
Colored.args = {
  ...WithText.args,
  color: 'is-danger'
}

export const InvertedColor = Template.bind({})
InvertedColor.args = {
  ...Colored.args,
  isInvertedColor: true
}

export const OutlinedColor = Template.bind({})
OutlinedColor.args = {
  ...Colored.args,
  isOutlined: true
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Colored.args,
  isRounded: true
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  ...Colored.args,
  isLoading: true
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...Colored.args,
  size: 'is-large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Colored.args,
  isDisabled: true
}

export const Static = Template.bind({})
Static.args = {
  ...Colored.args,
  isStatic: true
}
