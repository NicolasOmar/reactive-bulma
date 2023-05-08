import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Box from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Box',
  component: Box,
  argTypes: mocks.storybook
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = args => <Box {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'No children'

export const WithParagraph = Template.bind({})
WithParagraph.storyName = 'With a paragraph'
WithParagraph.args = {
  children: <p>{mocks.testing.testParagraph}</p>
}

export const OneBox = Template.bind({})
OneBox.storyName = 'Several paragraphs. One Box'
OneBox.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => <p key={`box-p-${i}`}>{mocks.testing.testParagraph}</p>)
}

export const SeveralBoxes = Template.bind({})
SeveralBoxes.storyName = 'Several paragraphs. Several Boxes'
SeveralBoxes.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => (
      <Box key={`box-${i}`}>{<p>{mocks.testing.testParagraph}</p>}</Box>
    ))
}
