import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Tile from '.'
// TYPES & INTERFACES
import { TileProps } from '../../../interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import imageMocks from '../Image/index.mocks.json'
import { Image } from '../index'

export default {
  title: 'Atoms/Tile',
  component: Tile,
  ...storybook,
  args: testing.basicChild
} as Meta<typeof Tile>

const Template: StoryFn<typeof Tile> = args => <Tile {...args} />

export const BasicExample = Template.bind({})

export const HalfSize = Template.bind({})
HalfSize.args = testing.halfSize as TileProps

export const Colored = Template.bind({})
Colored.args = {
  ...HalfSize.args,
  ...testing.colored
} as TileProps

export const WithImage = Template.bind({})
WithImage.args = {
  ...Colored.args,
  children: <Image src={imageMocks.testing.testSrc} />
} as TileProps
