import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import NavBarDropdown from '.'
// TYPES & INTERFACES
import { NavBarItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

const itemListWithDividers = createObjArray({
  numberOfItems: 5,
  externalParser: i => ({ children: `Dropdown item #${++i}` })
}) as NavBarItemProps[]

export default {
  title: 'Molecules/NavBarDropdown',
  component: NavBarDropdown,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof NavBarDropdown>

const Template: StoryFn<typeof NavBarDropdown> = args => (
  <nav className='navbar'>
    <NavBarDropdown {...args} />
  </nav>
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

export const HasAnActiveItem = Template.bind({})
HasAnActiveItem.args = {
  ...OpenState.args,
  items: itemListWithDividers.map((item, i) =>
    i === 0 ? { ...(item as NavBarItemProps), isActive: true } : item
  )
}

export const HasDividerItems = Template.bind({})
HasDividerItems.args = {
  ...Hoverable.args,
  items: itemListWithDividers.map((item, i) => (i % 2 ? 'divider' : item))
}

export const HasBoxedMenu = Template.bind({})
HasBoxedMenu.args = {
  ...OpenState.args,
  hasBoxedMenu: true
}

export const WithoutArrow = Template.bind({})
WithoutArrow.args = {
  ...Hoverable.args,
  isArrowLess: true
}

export const InverseDropdown = Template.bind({})
InverseDropdown.args = {
  ...Hoverable.args,
  hasDropdownUp: true
}
