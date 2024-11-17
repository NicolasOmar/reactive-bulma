import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
// COMPONENTS
import Modal from '.'
import ButtonGroup from '../ButtonGroup'
import { Button, Image } from '../../atoms'
// TYPES & INTERFACES
import { ButtonProps } from '../../../interfaces/atomProps'
// MOCKS
import { storybook } from './index.mocks.json'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  ...storybook
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = args => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  return (
    <>
      <Button
        text='Click here to open the modal'
        onClick={() => setModalIsOpen(!modalIsOpen)}
      />
      {modalIsOpen && (
        <Modal
          {...{
            ...args,
            onCloseClick: () => setModalIsOpen(!modalIsOpen)
          }}
        />
      )}
    </>
  )
}

export const BasicExample = Template.bind({})

export const ImageExample = Template.bind({})
ImageExample.args = {
  children: <Image src={storybook.testImageSrc} />
}

export const ButtonGroupExample = Template.bind({})
ButtonGroupExample.args = {
  children: (
    <ButtonGroup buttonList={storybook.testButtonList as ButtonProps[]} />
  )
}
