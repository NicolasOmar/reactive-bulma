import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// INTERFACES
import { TitleProps } from '../../../interfaces/atomProps'
// COMPONENTS
import Title from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: storybook,
  args: testing.baseConfig
} as Meta<typeof Title>

const Template: StoryFn<typeof Title> = args => <Title {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With minimum config'

export const SmallSize = Template.bind({})
SmallSize.storyName = 'With Big Size'
SmallSize.args = testing.smallSize as TitleProps

export const WithSubtitle = Template.bind({})
WithSubtitle.storyName = 'With a subtitle'
WithSubtitle.args = testing.withSubtitle as TitleProps

export const BiggerSubtitle = Template.bind({})
BiggerSubtitle.storyName = 'With a bigger subtitle'
BiggerSubtitle.args = testing.biggerSubtitle as TitleProps

export const SpacedTitle = Template.bind({})
SpacedTitle.storyName = 'Spiced title'
SpacedTitle.args = testing.spacedTitle as TitleProps
