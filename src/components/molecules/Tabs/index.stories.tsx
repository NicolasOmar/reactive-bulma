import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Tabs from '.'
// TYPES & INTERFACES
import { TabsProps } from '../../../interfaces/moleculeProps'
import { TabItemProps } from '../../../interfaces/atomProps'
// PARSERS
import { createObjArray } from '../../../functions/parsers'
// MOCKS
import { storybook, testing } from './index.mocks.json'

const externalParser = (i: number) => ({
  isActive: i === 0,
  text: `Tab #${++i}`
})

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  ...storybook,
  args: { tabs: createObjArray({ externalParser }) }
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />

export const BasicExample = Template.bind({})

export const ManyTabs = Template.bind({})
ManyTabs.args = {
  tabs: createObjArray({ numberOfItems: 7, externalParser }) as TabItemProps[]
}

export const AlignedToRight = Template.bind({})
AlignedToRight.args = {
  ...ManyTabs.args,
  ...(testing.rightAligned as TabsProps)
}

export const BoxedFormat = Template.bind({})
BoxedFormat.args = {
  ...AlignedToRight.args,
  ...(testing.boxedFormat as TabsProps)
}

export const ToggleFormat = Template.bind({})
ToggleFormat.args = {
  ...AlignedToRight.args,
  ...(testing.toggleFormat as TabsProps)
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...ToggleFormat.args,
  ...(testing.roundedToggleFormat as TabsProps)
}

export const FullWidthMode = Template.bind({})
FullWidthMode.args = {
  ...ToggleFormat.args,
  ...(testing.fullWidthMode as TabsProps)
}

export const BigSize = Template.bind({})
BigSize.args = {
  ...ToggleFormat.args,
  ...(testing.bigSize as TabsProps)
}
