import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Media from '.'
import { TextArea } from '../../atoms'
import { ButtonGroup } from '../index'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import imageMocks from '../../atoms/Image/index.mocks.json'
import buttonGroupMocks from '../ButtonGroup/index.mocks.json'

export default {
  title: 'Molecules/Media',
  component: Media,
  ...storybook,
  args: {
    mediaImage: {
      src: imageMocks.testing.testSrc
    },
    content: testing.basicDumbContent
  }
} as Meta<typeof Media>

const Template: StoryFn<typeof Media> = args => <Media {...args} />

export const BasicExample = Template.bind({})

export const WithInputAsContent = Template.bind({})
WithInputAsContent.args = {
  content: <TextArea />
}

export const WithAButtonGroup = Template.bind({})
const buttonGroupConfig = {
  ...buttonGroupMocks.testing.basicGroup,
  style: {
    paddingTop: '10px'
  }
} as ButtonGroupProps

WithAButtonGroup.args = {
  content: (
    <React.Fragment>
      <TextArea />
      <ButtonGroup {...buttonGroupConfig} />
    </React.Fragment>
  )
}
