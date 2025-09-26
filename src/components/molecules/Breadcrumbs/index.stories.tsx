import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Breadcrumbs from '.'
// TYPES & INTERFACES
import {
  RightCenteredAlignType,
  BreadcrumbSeparatorType
} from '@customTypes/styleTypes'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook } from './index.mocks.json'
import breacrumbItemMocks from '@components/atoms/BreadcrumbItem/index.mocks.json'

const externalParser = (i: number) => ({
  text: breacrumbItemMocks.testing.testText,
  isActiveItem: i === 4
})

const alignmentOptions: Array<RightCenteredAlignType> = [
  'is-centered',
  'is-right'
]

const separatorOptions: Array<BreadcrumbSeparatorType> = [
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
    items: createObjArray({ numberOfItems: 5, externalParser })
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
