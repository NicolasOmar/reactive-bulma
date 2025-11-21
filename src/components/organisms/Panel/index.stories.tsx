import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'
// COMPONENTS
import Panel from '.'
// TYPES & INTERFACES
import { PanelProps } from '@interfaces/organismProps'
import { PanelBlockProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { storybook, testing } from './index.mocks.json'

export default {
  title: 'Organisms/Panel',
  component: Panel,
  ...storybook,
  args: testing.basicConfig
} as Meta<typeof Panel>

const severalLinkBlocks = createObjArray({
  numberOfItems: 6,
  externalParser: i => ({
    blockText: `Link N° ${i}`,
    config: {
      type: 'icon',
      props: {
        iconLabel: testing.severalLinkBlocks[i]
      }
    }
  })
}) as PanelBlockProps[]

const severalElementBlocks = createObjArray({
  numberOfItems: 9,
  externalParser: i => ({
    config: {
      type: i % 2 ? 'control' : 'button',
      props:
        i % 2
          ? {
              inputConfig: {
                type: 'text',
                placeholder: `Hello again ${++i}`
              }
            }
          : {
              text: `Hello again ${++i}`,
              color: 'is-danger',
              isOutlined: true
            }
    }
  })
}) as PanelBlockProps[]

const Template: StoryFn<typeof Panel> = args => <Panel {...args} />

export const BasicExample = Template.bind({})

export const FistTabIsActive = Template.bind({})
FistTabIsActive.args = {
  ...testing.basicConfig,
  panelTabs: {
    ...testing.basicConfig.panelTabs,
    tabList: testing.basicConfig.panelTabs.tabList.map((_tabItem, tabI) => ({
      ..._tabItem,
      isActive: tabI === 0
    }))
  }
} as PanelProps

export const SeveralLinkBlocks = Template.bind({})
SeveralLinkBlocks.args = {
  ...FistTabIsActive.args,
  blockList: severalLinkBlocks
}

export const HasAnActiveLink = Template.bind({})
HasAnActiveLink.args = {
  ...SeveralLinkBlocks.args,
  blockList: severalLinkBlocks.map((_linkBlock, linkBlockI) => ({
    ..._linkBlock,
    isActive: linkBlockI === 1
  }))
}

export const Colored = Template.bind({})
Colored.args = {
  ...HasAnActiveLink.args,
  ...(testing.colored as PanelProps)
}

export const SeveralElementBlocks = Template.bind({})
SeveralElementBlocks.args = {
  ...(testing.colored as PanelProps),
  blockList: severalElementBlocks
}
