import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Media from '.'
import { Delete, Image, TextArea } from '@components/atoms'
import { ButtonGroup } from '../index'
// TYPES & INTERFACES
import { ButtonGroupProps, MediaProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import imageMocks from '@components/atoms/Image/index.mocks.json'
import buttonGroupMocks from '../ButtonGroup/index.mocks.json'

const buttonGroupConfig = {
  ...buttonGroupMocks.testing.basicGroup,
  style: {
    paddingTop: '10px'
  }
} as ButtonGroupProps
const mediaCompleteConfig = {
  leftContent: (
    <Image
      src={imageMocks.testing.testSrc}
      fixedSize={'128x128'}
    />
  ),
  centerContent: (
    <React.Fragment>
      <TextArea />
      <ButtonGroup {...buttonGroupConfig} />
    </React.Fragment>
  ),
  rightContent: <Delete />
} as MediaProps

export default {
  title: 'Molecules/Media',
  component: Media,
  ...storybook,
  args: {
    leftContent: mediaCompleteConfig.leftContent,
    centerContent: testing.longDumbContent
  }
} as Meta<typeof Media>

const Template: StoryFn<typeof Media> = args => <Media {...args} />

export const BasicExample = Template.bind({})

export const WithInputAsContent = Template.bind({})
WithInputAsContent.args = {
  centerContent: <TextArea />
}

export const WithAButtonGroup = Template.bind({})

WithAButtonGroup.args = {
  centerContent: mediaCompleteConfig.centerContent
}

export const WithADeleteButton = Template.bind({})
WithADeleteButton.args = {
  ...WithAButtonGroup.args,
  rightContent: mediaCompleteConfig.rightContent
}

export const WithMediaComponentInSecondLevel = Template.bind({})
WithMediaComponentInSecondLevel.args = {
  centerContent: (
    <React.Fragment>
      {testing.longDumbContent}
      <Media {...mediaCompleteConfig} />
      <Media {...mediaCompleteConfig} />
      <Media {...mediaCompleteConfig} />
    </React.Fragment>
  )
}
