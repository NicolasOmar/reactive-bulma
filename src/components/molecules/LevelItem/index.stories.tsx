import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import LevelItem from '.'
import { LevelHeader, Title } from '../../atoms'
// TYPES & INTERFACES
import { TitleProps } from '../../../interfaces/atomProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import titleMocks from '../../atoms/Title/index.mocks.json'
import levelHeaderMocks from '../../atoms/LevelHeader/index.mocks.json'

export default {
  title: 'Molecules/LevelItem',
  component: LevelItem,
  ...storybook,
  args: {
    content: testing.testContent
  }
} as Meta<typeof LevelItem>

const Template: StoryFn<typeof LevelItem> = args => <LevelItem {...args} />

export const BasicExample = Template.bind({})

export const TitleAsContent = Template.bind({})
TitleAsContent.args = {
  content: <Title {...(titleMocks.testing.withSubtitle as TitleProps)} />
}
export const LevelHeaderAsContent = Template.bind({})
LevelHeaderAsContent.args = {
  content: <LevelHeader {...levelHeaderMocks.testing.basicConfig} />
}
