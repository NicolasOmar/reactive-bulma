import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Section from '.'
import { Title } from '@components/atoms'
import { Tabs } from '@components/molecules'
// TYPES & INTERFACES
import { TabItemProps, TitleProps } from '@interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import titleMocks from '@components/atoms/Title/index.mocks.json'

const tabs = createObjArray({
  numberOfItems: 7,
  externalParser: (i: number) => ({
    isActive: i === 0,
    text: `Tab #${++i}`
  })
})

export default {
  title: 'Molecules/Section',
  component: Section,
  ...storybook,
  args: testing.basicContentConfig
} as Meta<typeof Section>

const Template: StoryFn<typeof Section> = args => <Section {...args} />

export const BasicExample = Template.bind({})

export const UsingATitleAsContent = Template.bind({})
UsingATitleAsContent.args = {
  content: <Title {...(titleMocks.testing.withSubtitle as TitleProps)} />
}

export const UsingTabsAndTitleAsContent = Template.bind({})
UsingTabsAndTitleAsContent.args = {
  content: (
    <React.Fragment>
      <Tabs tabs={tabs as TabItemProps[]} />
      <Title {...(titleMocks.testing.withSubtitle as TitleProps)} />
    </React.Fragment>
  )
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...UsingTabsAndTitleAsContent.args,
  size: 'is-large'
}
