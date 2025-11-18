import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Grid from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

const renderGridCells = (listLength: number = 5) =>
  Array(listLength)
    .fill(null)
    .map(() => ({
      children: <p>{testing.testParagraph}</p>
    }))

export default {
  title: 'Molecules/Grid',
  component: Grid,
  ...storybook,
  args: { listOfCells: renderGridCells() }
} as Meta<typeof Grid>

const Template: StoryFn<typeof Grid> = args => <Grid {...args} />

export const BasicExample = Template.bind({})

export const LotsOfCells = Template.bind({})
LotsOfCells.args = {
  listOfCells: renderGridCells(25)
}

export const HugeColumnGap = Template.bind({})
HugeColumnGap.args = {
  ...LotsOfCells.args,
  columnGap: 'is-column-gap-8'
}

export const HugeRowGap = Template.bind({})
HugeRowGap.args = {
  ...LotsOfCells.args,
  rowGap: 'is-row-gap-8'
}

export const HugeGridGap = Template.bind({})
HugeGridGap.args = {
  ...LotsOfCells.args,
  gap: 'is-gap-8'
}
