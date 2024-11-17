import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import File from '.'
// TYPES & INTERFACES
import { FileProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing, storybook } from './index.mocks.json'

export default {
  title: 'Atoms/File',
  component: File,
  ...storybook
} as Meta<typeof File>

const Template: StoryFn<typeof File> = args => <File {...args} />

export const OnlyRequiredProps = Template.bind({})

export const DifferentIcon = Template.bind({})
DifferentIcon.args = testing.differentIcon

export const DifferentText = Template.bind({})
DifferentText.args = testing.differentText

export const WithFileName = Template.bind({})
WithFileName.args = testing.withFileName

export const ColoredButton = Template.bind({})
ColoredButton.args = {
  ...WithFileName.args,
  ...(testing.coloredButton as FileProps)
}

export const FullWidthMode = Template.bind({})
FullWidthMode.args = {
  ...ColoredButton.args,
  ...testing.fullWidthMode
}

export const BoxedMode = Template.bind({})
BoxedMode.args = {
  ...ColoredButton.args,
  ...testing.boxedMode
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...ColoredButton.args,
  ...(testing.largeSize as FileProps)
}
