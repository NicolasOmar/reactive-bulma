import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import PanelBlock from '.'
// TYPES & INTERFACES
import { PanelBlockProps } from '@interfaces/moleculeProps'
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

export const ControlExample = Template.bind({})
ControlExample.args = testing.controlConfig as PanelBlockProps

export const ButtonExample = Template.bind({})
ButtonExample.args = testing.buttonConfig as PanelBlockProps
