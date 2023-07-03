import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Select from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: mocks.storybook
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = args => <Select {...args} />

export const OnlyRequiredProps = Template.bind({})
OnlyRequiredProps.storyName = 'Only Required props'

export const WithOneOption = Template.bind({})
WithOneOption.storyName = 'With 1 option'
WithOneOption.args = mocks.testing.oneOption

export const WithSeveralOptions = Template.bind({})
WithSeveralOptions.storyName = 'With several options'
WithSeveralOptions.args = mocks.testing.severalOptions

export const ShowsSeveralOptions = Template.bind({})
ShowsSeveralOptions.storyName = 'With several options'
ShowsSeveralOptions.args = {
  ...mocks.testing.severalOptions,
  ...mocks.testing.showsThreeOptions
}

export const FirstOptionsSelected = Template.bind({})
FirstOptionsSelected.storyName = 'First option selected'
FirstOptionsSelected.args = {
  ...mocks.testing.showsThreeOptions,
  ...mocks.testing.firstOptionSelected
}
