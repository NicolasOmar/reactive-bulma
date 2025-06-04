import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import MenuList from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/MenuList',
  component: MenuList,
  ...storybook,
  args: {
    itemList: Array(5).fill({ text: 'hello' })
  }
} as Meta<typeof MenuList>

const Template: StoryFn<typeof MenuList> = args => <MenuList {...args} />

export const BasicExample = Template.bind({})

export const ListAndSublist = Template.bind({})
ListAndSublist.args = {
  itemList: [
    {
      subListTitle: { text: 'Hello title' },
      subItems: Array(5).fill({ text: 'hello sub item' })
    }
  ]
}
