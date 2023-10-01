import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Icon from '.'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: testing.baseConfig,
  ...storybook
} as Meta<typeof Icon>

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const TextIncluded = Template.bind({})
TextIncluded.storyName = 'With text'
TextIncluded.args = testing.textIncluded as IconProps

export const UsingOtherIcon = Template.bind({})
UsingOtherIcon.storyName = 'With other icon'
UsingOtherIcon.args = testing.otherIcon as IconProps

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = testing.colored as IconProps

export const BigSize = Template.bind({})
BigSize.storyName = 'With Big Size'
BigSize.args = testing.bigSize as IconProps

export const WithDarkMode = Template.bind({})
WithDarkMode.storyName = 'With Dark Mode'
WithDarkMode.args = testing.withDarkMode as IconProps

export const Spinning = Template.bind({})
Spinning.storyName = 'Spinning'
Spinning.args = testing.withSpin as IconProps
