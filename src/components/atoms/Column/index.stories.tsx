import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENTS
import Column from '.'
import Button from '../Button'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Column',
  component: Column,
  argTypes: mocks.storybook
} as ComponentMeta<typeof Column>

const Template: ComponentStory<typeof Column> = args => <Column {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'No children'

export const WithParagraph = Template.bind({})
WithParagraph.storyName = 'With a paragraph'
WithParagraph.args = {
  children: <p>{mocks.testing.testParagraph}</p>
}

export const WithLargeParagraph = Template.bind({})
WithLargeParagraph.storyName = 'With a large paragraph'
WithLargeParagraph.args = {
  children: <p>{mocks.testing.testLargeParagraph}</p>
}

export const WithButton = Template.bind({})
WithButton.storyName = 'With a button'
WithButton.args = {
  children: <Button text='This is a button' />
}
