import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import InputControl from '.'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
import { InputControlProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import iconMocks from '../../atoms/Icon/index.mocks.json'

export default {
  title: 'Molecules/InputControl',
  component: InputControl,
  ...storybook,
  args: testing.baseConfig
} as Meta<typeof InputControl>

const Template: StoryFn<typeof InputControl> = args => (
  <InputControl {...args} />
)

export const BasicExample = Template.bind({})

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = { leftIcon: iconMocks.testing.baseConfig }

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  ...WithLeftIcon.args,
  rightIcon: iconMocks.testing.otherIcon
}

export const ErrorState = Template.bind({})
ErrorState.args = {
  ...WithBothIcons.args,
  inputConfig: {
    ...(testing.baseConfig.inputControlConfig as InputProps),
    color: 'is-danger'
  }
}

export const BigSize = Template.bind({})
BigSize.args = testing.bigSizeConfig as InputControlProps

export const LoadingState = Template.bind({})
LoadingState.args = {
  ...BigSize.args,
  isLoading: true
}
