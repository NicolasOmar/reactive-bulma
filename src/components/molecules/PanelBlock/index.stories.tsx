import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import PanelBlock from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/PanelBlock',
  component: PanelBlock,
  ...storybook,
  args: {
    blockText: 'Hello there',
    iconConfig: {
      iconLabel: 'home'
    }
  }
} as Meta<typeof PanelBlock>

const Template: StoryFn<typeof PanelBlock> = args => <PanelBlock {...args} />

export const BasicExample = Template.bind({})
