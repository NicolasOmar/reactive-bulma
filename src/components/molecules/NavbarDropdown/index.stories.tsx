import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import NavbarDropdown from '.'
// TYPES & INTERFACES
import { NavbarItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

const itemListWithDividers = createObjArray({
  numberOfItems: 5,
  externalParser: i => ({ children: `Dropdown item #${++i}` })
}) as NavbarItemProps[]

export default {
  title: 'Molecules/NavbarDropdown',
  component: NavbarDropdown,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof NavbarDropdown>

const Template: StoryFn<typeof NavbarDropdown> = args => (
  <NavbarDropdown {...args} />
)

export const BasicExample = Template.bind({})

export const OpenState = Template.bind({})
OpenState.args = {
  isActive: true
}

export const Hoverable = Template.bind({})
Hoverable.args = {
  isHoverable: true
}

export const HasDividerItems = Template.bind({})
HasDividerItems.args = {
  ...Hoverable.args,
  items: itemListWithDividers.map((item, i) => (i % 2 ? 'divider' : item))
}

export const HasBoxedMenu = Template.bind({})
HasBoxedMenu.args = {
  ...Hoverable.args,
  hasBoxedMenu: true
}

export const InverseDropdown = Template.bind({})
InverseDropdown.args = {
  ...Hoverable.args,
  hasDropdownUp: true
}
