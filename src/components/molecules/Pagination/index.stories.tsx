import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Pagination from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook } from './index.mocks.json'

const createPages = (numberOfPages = 3) =>
  Array(numberOfPages)
    .fill(null)
    .map((_, i) => ({ text: `${++i}` }))

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  ...storybook,
  args: { pages: createPages() }
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = args => <Pagination {...args} />

export const BasicExample = Template.bind({})

export const NoNavigationPages = Template.bind({})
NoNavigationPages.args = {
  showPreviousPageButton: null,
  showNextPageButton: null
}

export const FifteenItems = Template.bind({})
FifteenItems.args = {
  pages: createPages(15)
}

export const EllipsisWithLessItems = Template.bind({})
EllipsisWithLessItems.args = {
  ...FifteenItems.args,
  hasEllipsis: true,
  ellipsisItems: 3
}
