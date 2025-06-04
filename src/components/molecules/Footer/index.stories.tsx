import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Footer from '.'
import ButtonGroup from '../ButtonGroup'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'
import buttonListMocks from '../ButtonGroup/index.mocks.json'

export default {
  title: 'Molecules/Footer',
  component: Footer,
  ...storybook,
  args: testing.basicExample
} as Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = args => <Footer {...args} />

export const BasicExample = Template.bind({})

export const BulmaExample = Template.bind({})
BulmaExample.args = {
  content: (
    <p>
      <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>.
      The source code is licensed{' '}
      <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>
    </p>
  )
}

export const Centered = Template.bind({})
Centered.args = {
  ...BulmaExample.args,
  isContentCentered: true
}

export const WithCustomComponent = Template.bind({})
WithCustomComponent.args = {
  content: (
    <ButtonGroup
      {...(buttonListMocks.testing.basicGroup as ButtonGroupProps)}
    />
  )
}
