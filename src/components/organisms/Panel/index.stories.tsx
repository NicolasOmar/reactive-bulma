import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Panel from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Organisms/Panel',
  component: Panel,
  ...storybook,
  args: testing.basicConfig
} as Meta<typeof Panel>

const Template: StoryFn<typeof Panel> = args => <Panel {...args} />

export const BasicExample = Template.bind({})
