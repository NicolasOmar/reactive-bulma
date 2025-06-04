import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import TableHeadCell from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/TableHeadCell',
  component: TableHeadCell,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof TableHeadCell>

const Template: StoryFn<typeof TableHeadCell> = args => (
  <table>
    <tbody>
      <tr>
        <TableHeadCell {...args} />
      </tr>
    </tbody>
  </table>
)

export const BasicExample = Template.bind({})
