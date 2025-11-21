import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import {
  FormFieldElement,
  FormFieldInputProps
} from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import formFieldInputMocks from '@components/molecules/FormFieldInput/index.mocks.json'

export default {
  title: 'Organisms/FormField',
  component: FormField,
  ...storybook,
  args: testing.baseConfig
} as Meta<typeof FormField>

const listOfGroupedInputControls = createObjArray({
  numberOfItems: 2,
  externalParser: () => testing.baseConfig.inputsConfig
})

const Template: StoryFn<typeof FormField> = args => <FormField {...args} />

export const BasicExample = Template.bind({})

export const InHorizontalMode = Template.bind({})
InHorizontalMode.args = {
  ...testing.horizontalCase
}

export const GroupedInputs = Template.bind({})
GroupedInputs.args = {
  isGrouped: true,
  inputsConfig: listOfGroupedInputControls as FormFieldInputProps[]
}

export const InputWithAddon = Template.bind({})
InputWithAddon.args = {
  inputsConfig: {
    leftInput: formFieldInputMocks.testing.selectConfigCase
      .mainInput as FormFieldElement,
    mainInput: formFieldInputMocks.testing.inputConfigCase
      .mainInput as FormFieldElement
  },
  withAddons: true
}

export const InputWithBothAddons = Template.bind({})
InputWithBothAddons.args = {
  ...InputWithAddon.args,
  inputsConfig: {
    leftInput: formFieldInputMocks.testing.selectConfigCase
      .mainInput as FormFieldElement,
    mainInput: formFieldInputMocks.testing.inputConfigCase
      .mainInput as FormFieldElement,
    rightInput: formFieldInputMocks.testing.buttonConfigCase
      .mainInput as FormFieldElement
  },
  withAddons: true
}
