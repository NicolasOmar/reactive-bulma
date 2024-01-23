import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TileBox from '.'
import { Image } from '../../atoms'
// TYPES & INTERFACES
import { TileProps } from '../../../interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { storybook } from './index.mocks.json'
import tileMocks from '../../atoms/Tile/index.mocks.json'
import imageMocks from '../../atoms/Image/index.mocks.json'

export default {
  title: 'Molecules/TileBox',
  component: TileBox,
  ...storybook,
  args: tileMocks.testing.basicChild
} as Meta<typeof TileBox>

const Template: StoryFn<typeof TileBox> = args => <TileBox {...args} />

export const BasicExample = Template.bind({})

export const HalfSize = Template.bind({})
HalfSize.args = tileMocks.testing.halfSize as TileProps

export const Colored = Template.bind({})
Colored.args = {
  ...HalfSize.args,
  ...tileMocks.testing.colored
} as TileProps

export const WithImage = Template.bind({})
WithImage.args = {
  ...Colored.args,
  children: <Image src={imageMocks.testing.testSrc} />
} as TileProps
