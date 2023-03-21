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

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const BasicExample = Template.bind({})
BasicExample.storyName = 'With src only'
