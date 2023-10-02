import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import CheckBox from '.'
import Tag from '../Tag'
// TYPES & INTERFACES
import { CheckBoxProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  ...storybook
} as Meta<typeof CheckBox>

const Template: StoryFn<typeof CheckBox> = args => <CheckBox {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const WithTextContent = Template.bind({})
WithTextContent.storyName = 'With text content'
WithTextContent.args = testing.withTextContent as CheckBoxProps

export const WithComponentContent = Template.bind({})
WithComponentContent.storyName = 'With component content'
WithComponentContent.args = {
  content: <Tag text='Test' />
}

export const DisabledMode = Template.bind({})
DisabledMode.storyName = 'isDisabled'
DisabledMode.args = {
  ...WithTextContent.args,
  ...(testing.disabledMode as CheckBoxProps)
}
