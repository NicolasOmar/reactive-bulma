import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Card from '.'
// TYPES & INTERFACES
import { CardFooterProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { createObjArray } from '../../../functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'
import imageMocks from '../../atoms/Image/index.mocks.json'

export default {
  title: 'Organisms/Card',
  component: Card,
  ...storybook,
  args: testing.basicTestConfig
} as Meta<typeof Card>

const footerItems = createObjArray<CardFooterProps>({
  externalParser: i => ({ text: `Link #${++i}` })
}) as CardFooterProps[]

const Template: StoryFn<typeof Card> = args => <Card {...args} />

export const BasicExample = Template.bind({})

export const WithHeader = Template.bind({})
WithHeader.args = testing.headerTextConfig

export const WithImage = Template.bind({})
WithImage.args = {
  ...WithHeader.args,
  image: { src: imageMocks.testing.testSrc }
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  ...WithImage.args,
  footerLinks: footerItems
}
