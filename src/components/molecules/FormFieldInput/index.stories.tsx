import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import FormFieldInput from '.'
// TYPES & INTERFACES
import {
  FormFieldElement,
  FormFieldInputProps
} from '@interfaces/moleculeProps'
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

export const SelectCase = Template.bind({})
SelectCase.args = {
  ...(testing.selectConfigCase as FormFieldInputProps)
}

export const SelectWithLabel = Template.bind({})
SelectWithLabel.args = {
  mainInput: {
    ...(testing.selectConfigCase.mainInput as FormFieldElement),
    fieldLabel: 'Select with label'
  }
}

export const CheckboxCase = Template.bind({})
CheckboxCase.args = {
  ...(testing.checkboxConfigCase as FormFieldInputProps)
}

export const CheckboxWithLabel = Template.bind({})
CheckboxWithLabel.args = {
  mainInput: {
    ...(testing.checkboxConfigCase.mainInput as FormFieldElement),
    fieldLabel: 'Checkbox with label'
  }
}

export const RadiobuttonCase = Template.bind({})
RadiobuttonCase.args = {
  ...(testing.radioButtonConfigCase as FormFieldInputProps)
}

export const RadiobuttonWithLabel = Template.bind({})
RadiobuttonWithLabel.args = {
  mainInput: {
    ...(testing.radioButtonConfigCase.mainInput as FormFieldElement),
    fieldLabel: 'Radiobutton with label'
  }
}

export const TextareaCase = Template.bind({})
TextareaCase.args = {
  ...(testing.textAreaConfigCase as FormFieldInputProps)
}

export const TextareaWithLabel = Template.bind({})
TextareaWithLabel.args = {
  mainInput: {
    ...(testing.textAreaConfigCase.mainInput as FormFieldElement),
    fieldLabel: 'Textarea with label'
  }
}
export const LeftAddonSelect = Template.bind({})
LeftAddonSelect.args = {
  mainInput: testing.inputConfigCase.mainInput as FormFieldElement,
  leftInput: testing.selectConfigCase.mainInput as FormFieldElement
}
