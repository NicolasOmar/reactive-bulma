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
  argTypes: storybook
} as Meta<typeof File>

const Template: StoryFn<typeof File> = args => <File {...args} />

export const OnlyRequiredProps = Template.bind({})
OnlyRequiredProps.storyName = 'Only Required props'

export const DifferentIcon = Template.bind({})
DifferentIcon.storyName = 'With another icon'
DifferentIcon.args = testing.differentIcon

export const DifferentText = Template.bind({})
DifferentText.storyName = 'With another text'
DifferentText.args = testing.differentText

export const WithFileName = Template.bind({})
WithFileName.storyName = 'With file name'
WithFileName.args = testing.withFileName

export const ColoredButton = Template.bind({})
ColoredButton.storyName = 'Colored button'
ColoredButton.args = {
  ...WithFileName.args,
  ...(testing.coloredButton as FileProps)
}

export const FullWidthMode = Template.bind({})
FullWidthMode.storyName = 'Full width mode'
FullWidthMode.args = {
  ...ColoredButton.args,
  ...testing.fullWidthMode
}

export const BoxedMode = Template.bind({})
BoxedMode.storyName = 'Boxed mode'
BoxedMode.args = {
  ...ColoredButton.args,
  ...testing.boxedMode
}

export const LargeSize = Template.bind({})
LargeSize.storyName = 'Large size'
LargeSize.args = {
  ...ColoredButton.args,
  ...(testing.largeSize as FileProps)
}
