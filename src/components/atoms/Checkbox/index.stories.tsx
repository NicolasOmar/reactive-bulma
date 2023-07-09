import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Checkbox from '.'
// TYPES & INTERFACES
import { CheckboxProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'
import Tag from '../Tag'

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

export const WithComponentContent = Template.bind({})
WithComponentContent.storyName = 'With component content'
WithComponentContent.args = {
  content: <Tag text='Test' />
}

export const DisabledMode = Template.bind({})
DisabledMode.storyName = 'isDisabled'
DisabledMode.args = {
  ...WithTextContent.args,
  ...(testing.disabledMode as CheckboxProps)
}
