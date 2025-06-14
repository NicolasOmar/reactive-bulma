import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Checkbox from '.'
// TYPES & INTERFACES
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: testing.basicExample,
  ...storybook
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const BasicExample = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  isChecked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Checked.args,
  ...testing.disabledMode
}
