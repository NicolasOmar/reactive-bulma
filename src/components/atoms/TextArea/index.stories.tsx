import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import TextArea from '.'
// TYPES & INTERFACES
import { TextAreaProps } from '@interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  ...storybook
} as Meta<typeof TextArea>

const Template: StoryFn<typeof TextArea> = args => <TextArea {...args} />

export const BasicExample = Template.bind({})

export const WithText = Template.bind({})
WithText.args = testing.withText as TextAreaProps

export const Colored = Template.bind({})
Colored.args = testing.redColored as TextAreaProps

export const WithBigSize = Template.bind({})
WithBigSize.args = testing.bigSize as TextAreaProps

export const Skeleton = Template.bind({})
Skeleton.args = testing.skeleton as TextAreaProps

export const Hovered = Template.bind({})
Hovered.args = testing.hovered as TextAreaProps

export const Focused = Template.bind({})
Focused.args = testing.focused as TextAreaProps

export const Disabled = Template.bind({})
Disabled.args = testing.disabled as TextAreaProps

export const ReadOnly = Template.bind({})
ReadOnly.args = testing.readOnly as TextAreaProps

export const FixedSize = Template.bind({})
FixedSize.args = testing.fixedSize as TextAreaProps
