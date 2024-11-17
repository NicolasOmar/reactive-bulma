import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Delete from '.'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Delete',
  component: Delete,
  ...storybook
} as Meta<typeof Delete>

const Template: StoryFn<typeof Delete> = args => <Delete {...args} />

export const BasicExample = Template.bind({})

export const WithBigSize = Template.bind({})
WithBigSize.args = testing.bigSize as IconProps
