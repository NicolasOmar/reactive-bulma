import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import PanelBlock from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Molecules/PanelBlock',
  component: PanelBlock,
  ...storybook,
  args: testing.basicConfig
} as Meta<typeof PanelBlock>

const Template: StoryFn<typeof PanelBlock> = args => <PanelBlock {...args} />

export const BasicExample = Template.bind({})
