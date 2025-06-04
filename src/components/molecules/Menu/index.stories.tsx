import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Menu from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/Menu',
  component: Menu,
  ...storybook,
  args: testing.testMenuStructure
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = args => <Menu {...args} />

export const BasicExample = Template.bind({})

export const WithSecondLevel = Template.bind({})
WithSecondLevel.args = {
  menuSections: [
    ...testing.testMenuStructure.menuSections,
    testing.extendedMenuStructure
  ]
}
