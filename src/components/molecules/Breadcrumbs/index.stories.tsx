import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Breadcrumbs from '.'
// TYPES & INTERFACES
import {
  elementAlignType,
  breadcrumbSeparatorType
} from '../../../types/styleTypes'
// MOCKS
import { storybook } from './index.mocks.json'
import breacrumbItemMocks from '../../atoms/BreadcrumbItem/index.mocks.json'

const breadcrumbItems = Array(5)
  .fill(null)
  .map((_, i) => ({
    text: breacrumbItemMocks.testing.testText,
    isActiveItem: i === 4
  }))

const alignmentOptions: Array<elementAlignType> = ['is-centered', 'is-right']

const separatorOptions: Array<breadcrumbSeparatorType> = [
  'has-arrow-separator',
  'has-bullet-separator',
  'has-dot-separator',
  'has-succeeds-separator'
]

export default {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  ...storybook,
  argTypes: {
    alignment: {
      control: 'inline-radio',
      options: alignmentOptions
    },
    separator: {
      control: 'inline-radio',
      options: separatorOptions
    }
  },
  args: {
    items: breadcrumbItems
  }
} as Meta<typeof Breadcrumbs>

const Template: StoryFn<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />

export const BasicExample = Template.bind({})

export const SeparatedByDots = Template.bind({})
SeparatedByDots.args = {
  separator: 'has-dot-separator'
}

export const BigSize = Template.bind({})
BigSize.args = {
  size: 'is-large'
}

export const AlignedToRight = Template.bind({})
AlignedToRight.args = {
  alignment: 'is-right'
}