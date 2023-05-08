import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Icon from '.'
// MOCKS
// import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Icon',
  component: Icon
  // argTypes: mocks.storybook
} as Meta<typeof Icon>

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
