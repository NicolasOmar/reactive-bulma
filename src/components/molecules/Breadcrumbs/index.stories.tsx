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

const alignmentOptions: Array<RightCenteredAlignType> = ['centered', 'right']

const separatorOptions: Array<BreadcrumbSeparatorType> = [
  'arrow',
  'bullet',
  'dot',
  'succeeds'
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
  separator: 'dot'
}

export const BigSize = Template.bind({})
BigSize.args = {
  size: 'large'
}

export const AlignedToRight = Template.bind({})
AlignedToRight.args = {
  alignment: 'right'
}
