import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Icon from '.'
// MOCKS
import mocks from './index.mocks.json'
import { IconProps } from '../../../interfaces/atomProps'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: mocks.storybook,
  args: mocks.testing.baseConfig
} as Meta<typeof Icon>

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const TextIncluded = Template.bind({})
TextIncluded.storyName = 'With text'
TextIncluded.args = mocks.testing.textIncluded as IconProps

export const UsingOtherIcon = Template.bind({})
UsingOtherIcon.storyName = 'With other icon'
UsingOtherIcon.args = mocks.testing.otherIcon as IconProps

export const Colored = Template.bind({})
Colored.storyName = 'Colored'
Colored.args = mocks.testing.colored as IconProps

export const BigSize = Template.bind({})
BigSize.storyName = 'Big Size'
BigSize.args = mocks.testing.bigSize as IconProps

export const WithDarkMode = Template.bind({})
WithDarkMode.storyName = 'With Dark Mode'
WithDarkMode.args = mocks.testing.withDarkMode as IconProps

export const Spinning = Template.bind({})
Spinning.storyName = 'Spinning'
Spinning.args = mocks.testing.withSpin as IconProps
