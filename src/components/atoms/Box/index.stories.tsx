import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Box from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Box',
  component: Box,
  ...storybook
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = args => <Box {...args} />

export const NoChildren = Template.bind({})

export const WithParagraphExample = Template.bind({})
WithParagraphExample.args = {
  children: <p>{testing.testParagraph}</p>
}

export const OneBox = Template.bind({})
OneBox.storyName = 'Several paragraphs. One Box'
OneBox.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => <p key={`box-p-${i}`}>{testing.testParagraph}</p>)
}

export const SeveralBoxes = Template.bind({})
SeveralBoxes.storyName = 'Several paragraphs. Several Boxes'
SeveralBoxes.args = {
  children: Array(5)
    .fill(null)
    .map((_, i) => <Box key={`box-${i}`}>{<p>{testing.testParagraph}</p>}</Box>)
}
