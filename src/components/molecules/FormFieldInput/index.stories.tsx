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

// export const WithOneIcon = Template.bind({})
// WithOneIcon.args = {
//   input: {
//     ...(testing.inputConfigCase.input as FormFieldConfig),
//     leftIcon: {
//       iconLabel: 'account'
//     }
//   }
// }

// export const WithTwoIcons = Template.bind({})
// WithTwoIcons.args = {
//   ...WithOneIcon.args,
//   input: {
//     ...(WithOneIcon.args.input as FormFieldConfig),
//     rightIcon: {
//       iconLabel: 'check'
//     }
//   }
// }

// export const ErrorCase = Template.bind({})
// ErrorCase.args = {
//   ...WithLabel.args,
//   input: {
//     inputConfig: {
//       ...(testing.inputConfigCase.input.inputConfig as InputProps),
//       color: 'is-danger'
//     }
//   },
//   helper: {
//     ...testing.withHelper,
//     color: 'is-danger'
//   }
// }

export const SelectCase = Template.bind({})
SelectCase.args = {
  ...(testing.selectConfigCase as FormFieldInputProps)
}

export const CheckboxCase = Template.bind({})
CheckboxCase.args = {
  ...(testing.checkboxConfigCase as FormFieldInputProps)
}

export const RadiobuttonCase = Template.bind({})
RadiobuttonCase.args = {
  ...(testing.radioButtonConfigCase as FormFieldInputProps)
}

export const TextareaCase = Template.bind({})
TextareaCase.args = {
  ...(testing.textAreaConfigCase as FormFieldInputProps)
}

export const LeftAddonSelect = Template.bind({})
LeftAddonSelect.args = {
  mainInput: testing.inputConfigCase.mainInput as FormFieldElement,
  leftInput: testing.selectConfigCase.mainInput as FormFieldElement,
  withAddons: true
}
