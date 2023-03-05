import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENTS
import ProgressBar from '.'

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
)

export const NoText = Template.bind({})
NoText.storyName = 'Basic'

export const HalfValue = Template.bind({})
HalfValue.storyName = 'At 50%'
HalfValue.args = {
  value: 50
}

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = {
  ...HalfValue.args,
  color: 'is-primary'
}

export const MaxBeyond100 = Template.bind({})
MaxBeyond100.storyName = 'With Max > 100%'
MaxBeyond100.args = {
  ...HalfValue.args,
  max: 150
}

export const LargeSize = Template.bind({})
LargeSize.storyName = 'Large Size'
LargeSize.args = {
  ...MaxBeyond100.args,
  size: 'is-large'
}

export const Loading = Template.bind({})
Loading.storyName = 'Loading State'
Loading.args = {
  ...LargeSize.args,
  isLoading: true
}
