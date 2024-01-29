import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import NavbarItem from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/NavbarItem',
  component: NavbarItem,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof NavbarItem>

const Template: StoryFn<typeof NavbarItem> = args => <NavbarItem {...args} />

export const BasicExample = Template.bind({})
