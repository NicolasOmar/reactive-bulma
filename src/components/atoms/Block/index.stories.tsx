import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENTS
import Block from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Block',
  component: Block
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = args => <Block {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'No children'

export const WithParagraph = Template.bind({})
WithParagraph.storyName = 'With a paragraph'
WithParagraph.args = {
  children: <p>{mocks.testParagraph}</p>
}

export const OneBlock = Template.bind({})
OneBlock.storyName = 'Several paragraphs. One Block'
OneBlock.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => <p key={`block-p-${i}`}>{mocks.testParagraph}</p>)
}

export const SeveralBlocks = Template.bind({})
SeveralBlocks.storyName = 'Several paragraphs. Several Blocks'
SeveralBlocks.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => (
      <Block key={`block-${i}`}>{<p>{mocks.testParagraph}</p>}</Block>
    ))
}
