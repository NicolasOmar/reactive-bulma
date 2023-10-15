---
to: src/components/<%= fullRoute %>/index.stories.tsx
---
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import <%= name %> from '.'
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: '<%= storyRoute %>/<%= name %>',
  component: <%= name %>,
  ...storybook
} as Meta<typeof <%= name %>>

const Template: StoryFn<typeof <%= name %>> = args => <<%= name %> {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
