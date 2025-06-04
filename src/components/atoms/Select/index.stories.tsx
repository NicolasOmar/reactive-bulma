import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Select from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Select',
  component: Select,
  ...storybook
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = args => <Select {...args} />

export const OnlyRequiredProps = Template.bind({})

export const WithOneOption = Template.bind({})
WithOneOption.args = testing.oneOption

export const WithSeveralOptions = Template.bind({})
WithSeveralOptions.args = testing.severalOptions

export const Disabled = Template.bind({})
Disabled.args = {
  ...WithSeveralOptions.args,
  isDisabled: true
}

export const ShowsThreeOptions = Template.bind({})
ShowsThreeOptions.args = {
  ...testing.severalOptions,
  ...testing.showsThreeOptions
}

export const FirstOptionsSelected = Template.bind({})
FirstOptionsSelected.args = {
  ...testing.showsThreeOptions,
  ...testing.firstOptionSelected
}
