import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import { FormFieldInputProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Organisms/FormField',
  component: FormField,
  ...storybook,
  args: {
    config: testing.baseConfig.config
  }
} as Meta<typeof FormField>

const listOfGroupedInputControls = createObjArray({
  numberOfItems: 2,
  externalParser: () => testing.baseConfig.config
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
  config: listOfGroupedInputControls as FormFieldInputProps[]
}
