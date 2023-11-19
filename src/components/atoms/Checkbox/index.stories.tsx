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

export const WithTextContent = Template.bind({})
WithTextContent.args = testing.withTextContent as CheckBoxProps

export const WithComponentContent = Template.bind({})
WithComponentContent.args = {
  content: <Tag text='Test' />
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...WithTextContent.args,
  ...(testing.disabledMode as CheckBoxProps)
}
