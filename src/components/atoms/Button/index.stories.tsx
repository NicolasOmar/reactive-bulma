import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENT
import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const BasicExample = Template.bind({})
BasicExample.args = {
  text: 'Hello there'
}
