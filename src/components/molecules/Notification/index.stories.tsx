import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Notification from '.'
// TYPES & INTERFACES
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Molecules/Notification',
  component: Notification,
  args: {
    children: testing.testParagraph
  },
  ...storybook
} as Meta<typeof Notification>

const Template: StoryFn<typeof Notification> = args => (
  <Notification {...args} />
)

export const WithParagraph = Template.bind({})
WithParagraph.storyName = 'With Paragraph'

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = {
  color: 'is-danger'
}

export const WithDeleteButton = Template.bind({})
WithDeleteButton.storyName = 'With Delete Button'
WithDeleteButton.args = {
  ...Colored.args,
  deleteButton: {
    size: 'is-medium'
  }
}

export const LigthColored = Template.bind({})
LigthColored.storyName = 'Light Colored'
LigthColored.args = {
  ...Colored.args,
  isLightColor: true
}
