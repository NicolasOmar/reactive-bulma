import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import TextArea from '.'
// TYPES & INTERFACES
import { TextAreaProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  ...storybook
} as Meta<typeof TextArea>

const Template: StoryFn<typeof TextArea> = args => <TextArea {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With required props only'

export const WithText = Template.bind({})
WithText.storyName = 'With Text'
WithText.args = testing.withText as TextAreaProps

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = testing.redColored as TextAreaProps

export const BigSize = Template.bind({})
BigSize.storyName = 'With Big Size'
BigSize.args = testing.bigSize as TextAreaProps

export const Hovered = Template.bind({})
Hovered.storyName = 'Hovered'
Hovered.args = testing.hovered as TextAreaProps

export const Focused = Template.bind({})
Focused.storyName = 'Focused'
Focused.args = testing.focused as TextAreaProps

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = testing.disabled as TextAreaProps

export const ReadOnly = Template.bind({})
ReadOnly.storyName = 'Read only'
ReadOnly.args = testing.readOnly as TextAreaProps

export const FixedSize = Template.bind({})
FixedSize.storyName = 'Fixed Size'
FixedSize.args = testing.fixedSize as TextAreaProps
