import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// INTERFACES
import { TitleProps } from '@interfaces/atomProps'
// COMPONENTS
import Title from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Title',
  component: Title,
  args: testing.baseConfig,
  ...storybook
} as Meta<typeof Title>

const Template: StoryFn<typeof Title> = args => <Title {...args} />

export const BasicExample = Template.bind({})

export const WithBigSize = Template.bind({})
WithBigSize.args = testing.smallSize as TitleProps

export const WithSubtitles = Template.bind({})
WithSubtitles.args = testing.withSubtitle as TitleProps

export const WithBiggerSubtitles = Template.bind({})
WithBiggerSubtitles.args = testing.biggerSubtitle as TitleProps

export const SpicedTitle = Template.bind({})
SpicedTitle.args = testing.spacedTitle as TitleProps
