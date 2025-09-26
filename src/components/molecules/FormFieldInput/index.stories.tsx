import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import { FormFieldInputProps } from '@interfaces/moleculeProps'

export default {
  title: 'Molecules/FormFieldInput',
  component: FormFieldInput,
  ...storybook,
  args: {
    ...testing.inputConfigCase
  }
} as Meta<typeof FormFieldInput>

const Template: StoryFn<typeof FormFieldInput> = args => (
  <FormFieldInput {...args} />
)

export const BasicExample = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = testing.withLabel

export const WithLabelAndHelper = Template.bind({})
WithLabelAndHelper.args = {
  ...WithLabel.args,
  helper: testing.withHelper
}

export const ErrorCase = Template.bind({})
ErrorCase.args = {
  ...WithLabel.args,
  helper: {
    ...testing.withHelper,
    color: 'is-danger'
  }
}

export const SelectCase = Template.bind({})
SelectCase.args = {
  ...WithLabel.args,
  ...(testing.selectConfigCase as FormFieldInputProps)
}

export const CheckboxCase = Template.bind({})
CheckboxCase.args = {
  ...WithLabel.args,
  ...(testing.checkboxConfigCase as FormFieldInputProps)
}

export const RadiobuttonCase = Template.bind({})
RadiobuttonCase.args = {
  ...WithLabel.args,
  ...(testing.radioButtonConfigCase as FormFieldInputProps)
}

export const TextareaCase = Template.bind({})
TextareaCase.args = {
  ...WithLabel.args,
  ...(testing.textAreaConfigCase as FormFieldInputProps)
}
