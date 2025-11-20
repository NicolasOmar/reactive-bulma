import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import TileGroup from '.'
import { TileBox } from '@components/molecules'
// TYPES & INTERFACES
import { TileProps } from '@interfaces/atomProps'
import { BasicColorType } from '@customTypes/styleTypes'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import tileMocks from '@components/atoms/Tile/index.mocks.json'

const threeParentTiles = createObjArray({
  externalParser: i => ({
    context: 'is-parent',
    children: (
      <TileBox color={testing.testChildrenColors[i] as BasicColorType}>
        {tileMocks.testing.basicChild.children}
      </TileBox>
    )
  })
}) as TileProps[]

export default {
  title: 'Organisms/TileGroup',
  component: TileGroup,
  ...storybook,
  args: {
    context: 'is-ancestor',
    groupConfig: [
      {
        context: 'is-parent',
        children: (
          <TileBox color='is-info'>
            {tileMocks.testing.basicChild.children}
          </TileBox>
        )
      },
      {
        context: 'is-parent',
        children: [
          <TileBox
            key={'test-title-box-item'}
            size='3'
            color='is-primary'
          >
            {tileMocks.testing.basicChild.children}
          </TileBox>,
          <TileBox
            key={'test-title-box-item'}
            color='is-danger'
          >
            {tileMocks.testing.basicChild.children}
          </TileBox>
        ]
      }
    ]
  }
} as Meta<typeof TileGroup>

const Template: StoryFn<typeof TileGroup> = args => <TileGroup {...args} />

export const BasicExample = Template.bind({})

export const ThreeEqualColumns = Template.bind({})
ThreeEqualColumns.args = {
  context: 'is-ancestor',
  groupConfig: threeParentTiles
}

export const ThreeUnequalColumns = Template.bind({})
ThreeUnequalColumns.args = {
  context: 'is-ancestor',
  groupConfig: [
    {
      context: 'is-parent',
      size: '7',
      children: (
        <TileBox color='is-info'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    },
    {
      context: 'is-parent',
      children: (
        <TileBox color='is-primary'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    },
    {
      context: 'is-parent',
      size: '2',
      children: (
        <TileBox color='is-danger'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    }
  ]
}

export const ThreeColumnsInHalfScreen = Template.bind({})
ThreeColumnsInHalfScreen.args = {
  context: 'is-ancestor',
  size: '6',
  groupConfig: [
    {
      context: 'is-parent',
      children: (
        <TileBox color='is-info'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    },
    {
      context: 'is-parent',
      children: (
        <TileBox color='is-primary'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    },
    {
      context: 'is-parent',
      children: (
        <TileBox color='is-danger'>
          {tileMocks.testing.basicChild.children}
        </TileBox>
      )
    }
  ]
}
