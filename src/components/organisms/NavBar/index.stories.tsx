import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import NavBar from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  ...storybook
} as Meta<typeof NavBar>

const Template: StoryFn<typeof NavBar> = args => <NavBar {...args} />

export const BasicExample = Template.bind({})
