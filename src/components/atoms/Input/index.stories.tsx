import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Input from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: mocks.storybook,
  args: mocks.testing.basicExample
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With required props only'
