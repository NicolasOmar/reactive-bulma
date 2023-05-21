import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Input from '.'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: mocks.storybook,
  args: mocks.testing.basicExample
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With required props only'

export const WithText = Template.bind({})
WithText.storyName = 'With Text'
WithText.args = mocks.testing.withText as InputProps

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = mocks.testing.redColored as InputProps

export const BigSize = Template.bind({})
BigSize.storyName = 'BigSize'
BigSize.args = mocks.testing.bigSize as InputProps

export const Rounded = Template.bind({})
Rounded.storyName = 'Rounded'
Rounded.args = mocks.testing.rounded as InputProps

export const Hovered = Template.bind({})
Hovered.storyName = 'Hovered'
Hovered.args = mocks.testing.hovered as InputProps

export const Focused = Template.bind({})
Focused.storyName = 'Focused'
Focused.args = mocks.testing.focused as InputProps

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = mocks.testing.disabled as InputProps

export const ReadOnly = Template.bind({})
ReadOnly.storyName = 'ReadOnly'
ReadOnly.args = mocks.testing.readOnly as InputProps
