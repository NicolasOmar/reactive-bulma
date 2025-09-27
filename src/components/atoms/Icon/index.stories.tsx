import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Icon from '.'
// TYPES & INTERFACES
import { IconProps } from '@interfaces/atomProps'
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

export const TextIncluded = Template.bind({})
TextIncluded.args = testing.textIncluded as IconProps

export const UsingOtherIcon = Template.bind({})
UsingOtherIcon.args = testing.otherIcon as IconProps

export const Colored = Template.bind({})
Colored.args = testing.colored as IconProps

export const WithBigSize = Template.bind({})
WithBigSize.args = testing.bigSize as IconProps

export const DarkMode = Template.bind({})
DarkMode.args = testing.withDarkMode as IconProps

export const Spinning = Template.bind({})
Spinning.args = testing.withSpin as IconProps
