import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Checkbox from '.'
// TYPES & INTERFACES
import { CheckboxProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: storybook
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const WithTextContent = Template.bind({})
WithTextContent.storyName = 'With text content'
WithTextContent.args = testing.withTextContent as CheckboxProps

export const DisabledMode = Template.bind({})
DisabledMode.storyName = 'isDisabled'
DisabledMode.args = {
  ...WithTextContent.args,
  ...(testing.disabledMode as CheckboxProps)
}
