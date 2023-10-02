import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Notification from '.'
// TYPES & INTERFACES
// import { ButtonProps } from '../../../interfaces/atomProps'
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/Notification',
  component: Notification,
  ...storybook
} as Meta<typeof Notification>

const Template: StoryFn<typeof Notification> = args => (
  <Notification {...args} />
)

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Notification'
