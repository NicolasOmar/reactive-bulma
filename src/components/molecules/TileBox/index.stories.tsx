import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TileBox from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/TileBox',
  component: TileBox,
  ...storybook
} as Meta<typeof TileBox>

const Template: StoryFn<typeof TileBox> = args => <TileBox {...args} />

export const BasicExample = Template.bind({})
