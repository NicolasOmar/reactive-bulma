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
FewColumns.storyName = 'Few Columns'
FewColumns.args = {
  listOfColumns: renderColumns(5)
}

export const SeveralColumns = Template.bind({})
SeveralColumns.storyName = 'Several Columns'
SeveralColumns.args = {
  listOfColumns: renderColumns(16)
}

export const Multiline = Template.bind({})
Multiline.storyName = 'Multiline Mode'
Multiline.args = {
  ...SeveralColumns.args,
  isMultiline: true
}

export const Centered = Template.bind({})
Centered.storyName = 'Centered in Horizontal Mode'
Centered.args = {
  ...FewColumns.args,
  isHorizontallyCentered: true
}

export const NoGap = Template.bind({})
NoGap.storyName = 'No Gap between columns'
NoGap.args = {
  ...Centered.args,
  gap: null
}

export const MobileMode = Template.bind({})
MobileMode.storyName = 'Mobile mode'
MobileMode.args = {
  ...Centered.args,
  isMobileLayout: true
}
