import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// COMPONENTS
import Image from '.'
// MOCKS
import mocks from './index.mocks.json'

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: mocks.storybook,
  args: {
    src: mocks.testing.testSrc
  }
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => (
  <section style={{ maxWidth: '300px', maxHeight: '300px' }}>
    <Image {...args} />
  </section>
)

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With src only'

export const OtherFixedSize = Template.bind({})
OtherFixedSize.storyName = 'Fixed Size'
OtherFixedSize.args = {
  fixedSize: 'is-3by5'
}

export const IsRounded = Template.bind({})
IsRounded.storyName = 'Rounded'
IsRounded.args = {
  isRounded: true
}

export const CustomStyle = Template.bind({})
CustomStyle.storyName = 'Styled'
CustomStyle.args = {
  style: {
    padding: '50px'
  }
}
