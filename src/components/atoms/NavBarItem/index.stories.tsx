import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import NavBarItem from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/NavBarItem',
  component: NavBarItem,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof NavBarItem>

const Template: StoryFn<typeof NavBarItem> = args => <NavBarItem {...args} />

export const BasicExample = Template.bind({})
