import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Hero from '.'
import { Title } from '@components/atoms'
import { Breadcrumbs } from '@components/molecules'
// TYPES & INTERFACES
import { BreadcrumbItemProps, TitleProps } from '@interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import titleMocks from '@components/atoms/Title/index.mocks.json'
import breacrumbItemMocks from '@components/atoms/BreadcrumbItem/index.mocks.json'

const externalBreadcrumbParser = (i: number) => ({
  text: breacrumbItemMocks.testing.testText,
  isActiveItem: i === 4
})
const breadcrumbItems = createObjArray({
  numberOfItems: 5,
  externalParser: externalBreadcrumbParser
}) as BreadcrumbItemProps[]

export default {
  title: 'Organisms/Hero',
  component: Hero,
  ...storybook,
  args: { body: testing.basicConfig }
} as Meta<typeof Hero>

const Template: StoryFn<typeof Hero> = args => <Hero {...args} />

export const BasicExample = Template.bind({})

export const ExampleWithTitle = Template.bind({})
ExampleWithTitle.args = {
  body: <Title {...(titleMocks.testing.withSubtitle as TitleProps)} />
}

export const Colored = Template.bind({})
Colored.args = {
  ...ExampleWithTitle.args,
  color: 'is-primary'
}

export const BigSize = Template.bind({})
BigSize.args = {
  ...Colored.args,
  size: 'is-large'
}

export const FullSize = Template.bind({})
FullSize.args = {
  ...Colored.args,
  size: 'is-fullheight'
}

export const FixedFullSizeBody = Template.bind({})
FixedFullSizeBody.args = {
  ...FullSize.args,
  body: (
    <section className='container'>
      <Title {...(titleMocks.testing.withSubtitle as TitleProps)} />
    </section>
  )
}

export const FullSizeWithHeader = Template.bind({})
FullSizeWithHeader.args = {
  ...FixedFullSizeBody.args,
  header: <Breadcrumbs items={breadcrumbItems} />
}

export const WithHeaderAndFooter = Template.bind({})
WithHeaderAndFooter.args = {
  ...FullSizeWithHeader.args,
  footer: <Breadcrumbs items={breadcrumbItems} />
}
