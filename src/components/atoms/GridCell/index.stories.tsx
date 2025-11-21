import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import GridCell from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Atoms/GridCell',
  component: GridCell,
  ...storybook,
  args: { children: <p>{testing.testParagraph}</p> }
} as Meta<typeof GridCell>

const Template: StoryFn<typeof GridCell> = args => <GridCell {...args} />

export const BasicExample = Template.bind({})
