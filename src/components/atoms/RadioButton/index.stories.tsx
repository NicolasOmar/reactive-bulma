import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import RadioButton from '.'
// TYPES & INTERFACES
// import { CheckboxProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  // argTypes: storybook
  args: testing.basicExample
} as Meta<typeof RadioButton>

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
