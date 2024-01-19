import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Pagination from '.'
// TYPES & INTERFACES
import { PaginationItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  ...storybook,
  args: { pages: createObjArray() }
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = args => <Pagination {...args} />

export const BasicExample = Template.bind({})

export const Centered = Template.bind({})
Centered.args = {
  alignment: 'is-centered'
}

export const CustomNavigationButtons = Template.bind({})
CustomNavigationButtons.args = {
  showPreviousPageButton: testing.customNavigationButtons[0],
  showNextPageButton: testing.customNavigationButtons[1]
}

export const DisabledNavigationButtons = Template.bind({})
DisabledNavigationButtons.args = {
  showPreviousPageButton: {
    ...testing.customNavigationButtons[0],
    isDisabled: true
  },
  showNextPageButton: {
    ...testing.customNavigationButtons[1],
    isDisabled: true
  }
}

export const NoNavigationButtons = Template.bind({})
NoNavigationButtons.args = { ...testing.noNavigationButtons }

export const FifteenItems = Template.bind({})
FifteenItems.args = {
  pages: createObjArray({ numberOfItems: 15 }) as PaginationItemProps[]
}

export const Showing3ItemsLessWithEllipsis = Template.bind({})
Showing3ItemsLessWithEllipsis.args = {
  ...FifteenItems.args,
  ...testing.withEllipsis
}

export const Showing6ItemsLessWithEllipsis = Template.bind({})
Showing6ItemsLessWithEllipsis.args = {
  ...Showing3ItemsLessWithEllipsis.args,
  ellipsisItems: 6
}
