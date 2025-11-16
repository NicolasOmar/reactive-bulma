import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
import { FormFieldConfig, FormFieldInputProps } from '@interfaces/moleculeProps'
import { InputProps } from '@interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

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

export const WithOneIcon = Template.bind({})
WithOneIcon.args = {
  input: {
    ...(testing.inputConfigCase.input as FormFieldConfig),
    leftIcon: {
      iconLabel: 'account'
    }
  }
}

export const WithTwoIcons = Template.bind({})
WithTwoIcons.args = {
  ...WithOneIcon.args,
  input: {
    ...(WithOneIcon.args.input as FormFieldConfig),
    rightIcon: {
      iconLabel: 'check'
    }
  }
}

export const WithLabelAndHelper = Template.bind({})
WithLabelAndHelper.args = {
  ...WithLabel.args,
  helper: testing.withHelper
}

export const ErrorCase = Template.bind({})
ErrorCase.args = {
  ...WithLabel.args,
  input: {
    inputConfig: {
      ...(testing.inputConfigCase.input.inputConfig as InputProps),
      color: 'is-danger'
    }
  },
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
