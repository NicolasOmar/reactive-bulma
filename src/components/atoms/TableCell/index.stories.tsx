import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import TableCell from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/TableCell',
  component: TableCell,
  ...storybook,
  args: testing.testBaseConfig
} as Meta<typeof TableCell>

const Template: StoryFn<typeof TableCell> = args => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
)

export const BasicExample = Template.bind({})
