import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Image from '.'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/Image',
  component: Image,
  args: {
    src: testing.testSrc
  },
  ...storybook
} as Meta<typeof Image>

const Template: StoryFn<typeof Image> = args => (
  <section style={{ maxWidth: '300px', maxHeight: '300px' }}>
    <Image {...args} />
  </section>
)

export const BasicExample = Template.bind({})

export const WithFixedStyle = Template.bind({})
WithFixedStyle.args = {
  fixedSize: 'is-3by5'
}

export const IsRounded = Template.bind({})
IsRounded.args = {
  isRounded: true
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  style: {
    padding: '50px'
  }
}
