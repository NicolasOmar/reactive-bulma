import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import NavBar from '.'
import { Image } from '@components/atoms'
// TYPES & INTERFACES
import { NavBarItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook } from './index.mocks.json'
import navBarBrandMocks from '@components/molecules/NavBarBrand/index.mocks.json'

const itemListWithDividers = createObjArray({
  numberOfItems: 7,
  externalParser: i => ({ children: `Dropdown item #${++i}` })
}) as NavBarItemProps[]
const itemsforStory = {
  itemList: [
    { text: 'Hello there', items: itemListWithDividers, isHoverable: true }
  ]
}

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  ...storybook,
  args: {
    brandConfig: {
      brandConfig: {
        children: (
          <Image
            {...navBarBrandMocks.testing.testBasicConfig.brandConfig.children}
          />
        )
      }
    }
  }
} as Meta<typeof NavBar>

const Template: StoryFn<typeof NavBar> = args => <NavBar {...args} />

export const BasicExample = Template.bind({})

export const WithADropdownAtStart = Template.bind({})
WithADropdownAtStart.args = {
  itemsAtStart: itemsforStory
}

export const WithDropdownsAtStartAndEnd = Template.bind({})
WithDropdownsAtStartAndEnd.args = {
  ...WithADropdownAtStart.args,
  itemsAtEnd: itemsforStory
}
export const Spaced = Template.bind({})
Spaced.args = {
  ...WithDropdownsAtStartAndEnd.args,
  isSpaced: true
}

export const WithShadow = Template.bind({})
WithShadow.args = {
  ...WithDropdownsAtStartAndEnd.args,
  hasShadow: true
}

export const Colored = Template.bind({})
Colored.args = {
  ...WithDropdownsAtStartAndEnd.args,
  color: 'is-info'
}

export const Transparent = Template.bind({})
Transparent.args = {
  ...WithDropdownsAtStartAndEnd.args,
  isTransparent: true
}
