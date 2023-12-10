import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// COMPONENTS
import Modal from '.'
// TYPES & INTERFACES
// MOCKS
import { testing } from './index.mocks.json'

describe('Modal', () => {
  const { basicTestId, testChildren, backgroundTestId, closeTestId } = testing

  test('Should render the component', () => {
    render(<Modal>{testChildren}</Modal>)
    const testModal = screen.getByTestId(basicTestId)

    expect(testModal).toBeInTheDocument()
  })

  test('Should not render the component if has no children', () => {
    render(<Modal />)
    expect(() => screen.getByTestId(basicTestId)).toThrow()
  })

  test('Should render the modal and close it when I click its close button', async () => {
    const clickeableCloseConfig = {
      children: testChildren,
      onCloseClick: jest.fn()
    }

    render(<Modal {...clickeableCloseConfig} />)
    const closeModalButton = screen.getByTestId(closeTestId)

    expect(closeModalButton).toBeInTheDocument()
    await userEvent.click(closeModalButton)

    expect(clickeableCloseConfig.onCloseClick).toHaveBeenCalled()
    expect(() => screen.getByTestId(basicTestId)).toThrow()
  })

  test('Should render the modal and close it when I select its background', async () => {
    const clickeableCloseConfig = {
      children: testChildren,
      onCloseClick: jest.fn()
    }

    render(<Modal {...clickeableCloseConfig} />)
    const backgroundModal = screen.getByTestId(backgroundTestId)

    expect(backgroundModal).toBeInTheDocument()
    await userEvent.click(backgroundModal)

    expect(clickeableCloseConfig.onCloseClick).toHaveBeenCalled()
    expect(() => screen.getByTestId(basicTestId)).toThrow()
  })
})
