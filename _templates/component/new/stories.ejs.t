---
to: src/components/molecules/<%= name %>/index.stories.tsx
---
<%
  CamelName = h.inflection.camelize(name, false)
  UnderName = h.inflection.underscore(name, false)
%>
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import <%= CamelName %> from '.'
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/<%= CamelName %>',
  component: <%= CamelName %>,
  ...storybook
} as Meta<typeof <%= CamelName %>>

const Template: StoryFn<typeof <%= CamelName %>> = args => <<%= CamelName %> {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'Basic Example'
