import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Message from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/Message',
  component: Message,
  ...storybook,
  args: {
    bodyText: testing.testBodyText
  }
} as Meta<typeof Message>

const Template: StoryFn<typeof Message> = args => <Message {...args} />

export const BasicExample = Template.bind({})

export const WithHeader = Template.bind({})
WithHeader.args = {
  headerText: testing.testHeaderText
}

export const Colored = Template.bind({})
Colored.args = {
  ...WithHeader.args,
  color: 'is-primary'
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...Colored.args,
  size: 'is-large'
}

export const WithDeleteButton = Template.bind({})
WithDeleteButton.args = {
  ...LargeSize.args,
  deleteButton: { size: 'is-medium' }
}
