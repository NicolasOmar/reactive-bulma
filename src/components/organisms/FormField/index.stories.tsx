import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import { FormFieldInputProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Organisms/FormField',
  component: FormField,
  ...storybook,
  args: {
    inputControlConfig: testing.baseConfig.inputControlConfig
  }
} as Meta<typeof FormField>

const listOfGroupedInputControls = createObjArray({
  numberOfItems: 2,
  externalParser: i => ({
    inputControlConfig: {
      ...testing.baseConfig.inputControlConfig,
      config: {
        ...testing.baseConfig.inputControlConfig.config,
        placeholder: `Here is input #${++i}`
      }
    }
  })
})

const Template: StoryFn<typeof FormField> = args => <FormField {...args} />

export const BasicExample = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = testing.withLabel

export const WithLabelAndHelper = Template.bind({})
WithLabelAndHelper.args = {
  ...WithLabel.args,
  inputControlConfig: {
    ...testing.baseConfig.inputControlConfig,
    helper: testing.withHelper
  } as FormFieldInputProps
}

export const ErrorCase = Template.bind({})
ErrorCase.args = {
  inputControlConfig: {
    ...WithLabel.args,
    ...testing.baseConfig.inputControlConfig,
    helper: {
      ...testing.withHelper,
      color: 'is-danger'
    }
  } as FormFieldInputProps
}

export const GroupedInputs = Template.bind({})
GroupedInputs.args = {
  isGrouped: true,
  inputControlConfig: listOfGroupedInputControls as FormFieldInputProps[]
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...WithLabel.args,
  ...ErrorCase.args,
  ...testing.horizontalCase
}

export const SelectCase = Template.bind({})
SelectCase.args = {
  ...WithLabel.args,
  inputControlConfig: testing.selectConfigCase
    .inputControlConfig as FormFieldInputProps
}

export const CheckboxCase = Template.bind({})
CheckboxCase.args = {
  ...WithLabel.args,
  inputControlConfig: testing.checkboxConfigCase
    .inputControlConfig as FormFieldInputProps
}

export const RadiobuttonCase = Template.bind({})
RadiobuttonCase.args = {
  ...WithLabel.args,
  inputControlConfig: testing.radiobuttonConfigcase
    .inputControlConfig as FormFieldInputProps
}

export const TextareaCase = Template.bind({})
TextareaCase.args = {
  ...WithLabel.args,
  inputControlConfig: testing.textAreaConfigCase
    .inputControlConfig as FormFieldInputProps
}
