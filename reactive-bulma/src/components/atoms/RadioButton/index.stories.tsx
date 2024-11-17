import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import RadioButton from '.'
// TYPES & INTERFACES
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  args: testing.basicExample,
  ...storybook
} as Meta<typeof RadioButton>

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />

export const BasicExample = Template.bind({})

export const SeveralOptions = Template.bind({})
SeveralOptions.args = testing.severalOptions

export const OneOptionSelected = Template.bind({})
OneOptionSelected.storyName = 'Several Options, one selected'
OneOptionSelected.args = {
  ...testing.severalOptions,
  options: testing.severalOptions.options.map((_option, i) => ({
    ..._option,
    isChecked: i === 0
  }))
}

export const AllOptionsDisabled = Template.bind({})
AllOptionsDisabled.storyName = 'All options disabled'
AllOptionsDisabled.args = {
  ...testing.severalOptions,
  options: testing.severalOptions.options.map(_option => ({
    ..._option,
    isDisabled: true
  }))
}
