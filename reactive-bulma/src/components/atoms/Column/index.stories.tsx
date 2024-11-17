import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Column from '.'
import Button from '../Button'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Column',
  component: Column,
  ...storybook
} as Meta<typeof Column>

const Template: StoryFn<typeof Column> = args => <Column {...args} />

export const NoChildren = Template.bind({})

export const WithParagraphExample = Template.bind({})
WithParagraphExample.args = {
  children: <p>{testing.testParagraph}</p>
}

export const WithLargeParagraphExample = Template.bind({})
WithLargeParagraphExample.args = {
  children: <p>{testing.testLargeParagraph}</p>
}

export const WithButtonExample = Template.bind({})
WithButtonExample.args = {
  children: <Button text='This is a button' />
}
