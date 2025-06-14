import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Block from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Block',
  component: Block,
  ...storybook
} as Meta<typeof Block>

const Template: StoryFn<typeof Block> = args => <Block {...args} />

export const BasicExample = Template.bind({})

export const WithParagraph = Template.bind({})
WithParagraph.args = {
  children: <p>{testing.testParagraph}</p>
}

export const OneBlock = Template.bind({})
OneBlock.storyName = 'Several paragraphs. One Block'
OneBlock.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => <p key={`block-p-${i}`}>{testing.testParagraph}</p>)
}

export const SeveralBlocks = Template.bind({})
SeveralBlocks.storyName = 'Several paragraphs. Several Blocks'
SeveralBlocks.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => (
      <Block key={`block-${i}`}>{<p>{testing.testParagraph}</p>}</Block>
    ))
}
