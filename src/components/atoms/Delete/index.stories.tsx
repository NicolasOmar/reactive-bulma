import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Delete from '.'
// TYPES & INTERFACES
import { IconProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

export default {
  title: 'Atoms/Delete',
  component: Delete
} as Meta<typeof Delete>

const Template: StoryFn<typeof Delete> = args => <Delete {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'

export const BigSize = Template.bind({})
BigSize.storyName = 'With Big Size'
BigSize.args = testing.bigSize as IconProps
