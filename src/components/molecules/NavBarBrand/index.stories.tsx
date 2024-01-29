import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import NavBarBrand from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { storybook, testing } from './index.mocks.json'

const navBarShortWidthStoryTemplate: StoryFn<typeof NavBarBrand> = args => (
  <section style={{ width: '100px' }}>
    <NavBarBrand {...args} />
  </section>
)

export default {
  title: 'Molecules/NavBarBrand',
  component: NavBarBrand,
  ...storybook,
  args: testing.testBasicConfig
} as Meta<typeof NavBarBrand>

const Template: StoryFn<typeof NavBarBrand> = args => <NavBarBrand {...args} />

export const BasicExample = Template.bind({})

export const BurgerMenuExample = navBarShortWidthStoryTemplate
BurgerMenuExample.storyName =
  'Burger Menu Example (display width needs to at < 1024px)'

export const ActiveBurgerMenuExample = navBarShortWidthStoryTemplate
ActiveBurgerMenuExample.args = {
  isBurgerActive: true
}
ActiveBurgerMenuExample.storyName =
  'Active Burger Menu Example (display width needs to at < 1024px)'
