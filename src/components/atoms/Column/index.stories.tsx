import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENT
import Column from '.'

export default {
  title: 'Atoms/Column',
  component: Column
} as ComponentMeta<typeof Column>

const Template: ComponentStory<typeof Column> = args => <Column {...args} />

export const BasicExample = Template.bind({})
