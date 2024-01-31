import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TableRow from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/TableRow',
  component: TableRow,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof TableRow>

const Template: StoryFn<typeof TableRow> = args => (
  <table>
    <thead>
      <tr>
        <th>Head #1</th>
        <th>Head #2</th>
        <th>Head #3</th>
        <th>Head #4</th>
        <th>Head #5</th>
        <th>Head #6</th>
        <th>Head #7</th>
      </tr>
    </thead>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
)

export const BasicExample = Template.bind({})

export const WithHeaderCell = Template.bind({})
WithHeaderCell.args = {
  ...testing.testBaseConfig,
  ...testing.testHeadCellConfig
}

export const Selected = Template.bind({})
Selected.args = {
  ...WithHeaderCell.args,
  isSelected: true
}
