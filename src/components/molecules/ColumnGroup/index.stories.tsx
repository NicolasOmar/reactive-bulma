import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import ColumnGroup from '.'
// TYPES & INTERFACES
// MOCKS
import { testing, storybook } from './index.mocks.json'

const renderColumns = (requiredLength: number) =>
  Array(requiredLength)
    .fill(null)
    .map(() => ({
      children: <p>{testing.testParagraph}</p>
    }))

export default {
  title: 'Molecules/ColumnGroup',
  component: ColumnGroup,
  ...storybook
} as Meta<typeof ColumnGroup>

const Template: StoryFn<typeof ColumnGroup> = args => <ColumnGroup {...args} />

export const FewColumns = Template.bind({})
FewColumns.args = {
  listOfColumns: renderColumns(5)
}

export const SeveralColumns = Template.bind({})
SeveralColumns.args = {
  listOfColumns: renderColumns(16)
}

export const MultilineMode = Template.bind({})
MultilineMode.args = {
  ...SeveralColumns.args,
  isMultiline: true
}

export const CenteredInHorizontalMode = Template.bind({})
CenteredInHorizontalMode.args = {
  ...FewColumns.args,
  isHorizontallyCentered: true
}

export const NoGapBetweenColumns = Template.bind({})
NoGapBetweenColumns.args = {
  ...CenteredInHorizontalMode.args,
  gap: null
}

export const MobileMode = Template.bind({})
MobileMode.args = {
  ...CenteredInHorizontalMode.args,
  isMobileLayout: true
}
