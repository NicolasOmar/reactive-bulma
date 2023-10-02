import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Input from '.'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Input',
  component: Input,
  args: testing.basicExample,
  ...storybook
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With required props only'

export const WithText = Template.bind({})
WithText.storyName = 'With Text'
WithText.args = testing.withText as InputProps

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = testing.redColored as InputProps

export const BigSize = Template.bind({})
BigSize.storyName = 'With Big Size'
BigSize.args = testing.bigSize as InputProps

export const Rounded = Template.bind({})
Rounded.storyName = 'Rounded'
Rounded.args = testing.rounded as InputProps

export const Hovered = Template.bind({})
Hovered.storyName = 'Hovered'
Hovered.args = testing.hovered as InputProps

export const Focused = Template.bind({})
Focused.storyName = 'Focused'
Focused.args = testing.focused as InputProps

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = testing.disabled as InputProps

export const ReadOnly = Template.bind({})
ReadOnly.storyName = 'Read only'
ReadOnly.args = testing.readOnly as InputProps
