import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import FormField from '.'
// TYPES & INTERFACES
import { InputProps } from '../../../interfaces/atomProps'
import { InputControlProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { createObjArray } from '../../../functions/parsers'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import inputControlMocks from '../InputControl/index.mocks.json'

const { baseConfig } = inputControlMocks.testing

export default {
  title: 'Molecules/FormField',
  component: FormField,
  ...storybook,
  args: { inputControlConfig: baseConfig }
} as Meta<typeof FormField>

const inputControlWithColor = {
  inputControlConfig: {
    ...baseConfig,
    inputConfig: {
      ...baseConfig.inputConfig,
      color: 'is-danger'
    } as InputProps
  }
}
const listOfGroupedInputControls = createObjArray({
  numberOfItems: 2,
  externalParser: i => ({
    ...baseConfig,
    inputConfig: {
      ...baseConfig.inputConfig,
      placeholder: `Here is input #${++i}`
    } as InputProps
  })
})

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
  ...inputControlWithColor
}

export const GroupedInputs = Template.bind({})
GroupedInputs.args = {
  isGrouped: true,
  inputControlConfig: listOfGroupedInputControls as InputControlProps[]
}

export const ExpandedAndGroupedInputs = Template.bind({})
ExpandedAndGroupedInputs.args = {
  isGrouped: true,
  inputControlConfig: (listOfGroupedInputControls as InputControlProps[]).map(
    (_input, i) => ({ ..._input, isExpanded: i === 0 })
  )
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...ErrorCase.args,
  ...testing.horizontalCase
}
