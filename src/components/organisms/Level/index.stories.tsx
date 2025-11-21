import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Level from '.'
// TYPES & INTERFACES
import { LevelItemProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

const listOfLevelItems = createObjArray({
  externalParser: () => ({ content: `${testing.simpleContent}` })
})
const secondList = createObjArray({
  numberOfItems: 2,
  externalParser: () => ({ content: `${testing.otherContent}` })
})

export default {
  title: 'Organisms/Level',
  component: Level,
  ...storybook,
  args: { centerSide: listOfLevelItems }
} as Meta<typeof Level>

const Template: StoryFn<typeof Level> = args => <Level {...args} />

export const BasicExample = Template.bind({})

export const LeftSideExample = Template.bind({})
LeftSideExample.args = {
  centerSide: undefined,
  leftSide: listOfLevelItems as LevelItemProps[]
}

export const LeftAndCenter = Template.bind({})
LeftAndCenter.args = {
  ...LeftSideExample.args,
  centerSide: secondList as LevelItemProps[]
}

export const BothSides = Template.bind({})
BothSides.args = {
  ...LeftSideExample.args,
  rightSide: secondList as LevelItemProps[]
}

export const AllPossibleSides = Template.bind({})
AllPossibleSides.args = {
  leftSide: secondList as LevelItemProps[],
  centerSide: secondList as LevelItemProps[],
  rightSide: secondList as LevelItemProps[]
}
