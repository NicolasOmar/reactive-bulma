import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Title from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: mocks.storybook,
  args: mocks.testing.baseConfig
} as Meta<typeof Title>

const Template: StoryFn<typeof Title> = args => <Title {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With minimum config'
