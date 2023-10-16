---
to: <%= fileRoute %>.stories.tsx
---
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import <%= name %> from '.'
// TYPES & INTERFACES
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: '<%= storyRoute %>',
  component: <%= name %>,
  ...storybook
} as Meta<typeof <%= name %>>

const Template: StoryFn<typeof <%= name %>> = args => <<%= name %> {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
