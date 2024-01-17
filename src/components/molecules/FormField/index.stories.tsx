import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import inputControlMocks from '../InputControl/index.mocks.json'

export default {
  title: 'Molecules/FormField',
  component: FormField,
  ...storybook,
  args: { inputControlConfig: inputControlMocks.testing.baseConfig }
} as Meta<typeof FormField>

const Template: StoryFn<typeof FormField> = args => <FormField {...args} />

export const BasicExample = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = testing.withLabel

export const WithLabelAndHelper = Template.bind({})
WithLabelAndHelper.args = {
  ...WithLabel.args,
  ...testing.withHelper
}

export const ErrorCase = Template.bind({})
ErrorCase.args = {
  ...WithLabelAndHelper.args,
  inputControlConfig: {
    ...inputControlMocks.testing.baseConfig,
    inputConfig: {
      ...inputControlMocks.testing.baseConfig.inputConfig,
      color: 'is-danger'
    } as InputProps
  }
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...ErrorCase.args,
  ...testing.horizontalCase
}
