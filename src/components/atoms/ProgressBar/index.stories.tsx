import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import ProgressBar from '.'
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  ...storybook
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = args => <ProgressBar {...args} />

export const Basic = Template.bind({})

export const HalfValue = Template.bind({})
HalfValue.storyName = 'At 50%'
HalfValue.args = {
  value: 50
}

export const Colored = Template.bind({})
Colored.args = {
  ...HalfValue.args,
  color: 'primary'
}

export const MaxBeyond100 = Template.bind({})
MaxBeyond100.storyName = 'With Max > 100%'
MaxBeyond100.args = {
  ...HalfValue.args,
  max: 150
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...MaxBeyond100.args,
  size: 'is-large'
}

export const Loading = Template.bind({})
Loading.args = {
  ...LargeSize.args,
  isLoading: true
}
