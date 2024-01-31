import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Table from '.'
// TYPES & INTERFACES
import { TableProps } from '../../../interfaces/organismProps'
import { TableRowProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { storybook } from './index.mocks.json'

const testTableData = createObjArray<{ header: string; body: string }>({
  numberOfItems: 7,
  externalParser: i => ({
    header: `Header #${++i}`,
    body: `Row #${++i}`
  })
})
const headConfig = testTableData.map(({ header }) => ({ content: header }))
const bodyConfig = {
  listOfCells: testTableData.map(({ body }) => ({ content: body }))
}
const bodyConfigWithHeader = {
  headCell: { content: 'Header cell' },
  listOfCells: bodyConfig.listOfCells.filter(
    (_, i, originalList) => ++i < originalList.length
  )
}
const basicTableConfig = {
  head: headConfig,
  body: [bodyConfig]
} as TableProps

export default {
  title: 'Organisms/Table',
  component: Table,
  ...storybook,
  args: basicTableConfig
} as Meta<typeof Table>

const Template: StoryFn<typeof Table> = args => <Table {...args} />

export const BasicExample = Template.bind({})

export const FirstRowCellIsHeader = Template.bind({})
FirstRowCellIsHeader.args = {
  body: [bodyConfigWithHeader] as TableRowProps[]
}

export const LotsOfRows = Template.bind({})
LotsOfRows.args = {
  body: Array(20)
    .fill(null)
    .map(() => bodyConfig) as TableRowProps[]
}

export const SelectedRows = Template.bind({})
SelectedRows.args = {
  body: LotsOfRows.args.body?.map((_bodyRowConfig, i) => ({
    ..._bodyRowConfig,
    isSelected: Boolean(i % 2)
  }))
}

export const Bordered = Template.bind({})
Bordered.args = {
  ...LotsOfRows.args,
  isBordered: true
}

export const Striped = Template.bind({})
Striped.args = {
  ...LotsOfRows.args,
  isStriped: true
}

export const Narrow = Template.bind({})
Narrow.args = {
  ...LotsOfRows.args,
  isNarrow: true
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  ...LotsOfRows.args,
  isFullwidth: true
}

export const AllPropertiesApplied = Template.bind({})
AllPropertiesApplied.args = {
  ...Bordered.args,
  ...Striped.args,
  ...Narrow.args,
  ...FullWidth.args
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  ...AllPropertiesApplied.args,
  isContained: true
}
