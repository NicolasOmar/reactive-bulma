import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import File from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/File',
  component: File,
  argTypes: mocks.storybook
} as Meta<typeof File>

const Template: StoryFn<typeof File> = args => <File {...args} />

export const OnlyRequiredProps = Template.bind({})
OnlyRequiredProps.storyName = 'Only Required props'
