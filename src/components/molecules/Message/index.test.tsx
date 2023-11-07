import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Message from '.'
// TYPES & INTERFACES
import { MessageProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Message', () => {
  const { basicTestId, testClasses, testBodyText, testHeaderText } = testing

  test('Should render the component', () => {
    render(<Message bodyText={testBodyText} />)
    const testMessage = screen.getByTestId(basicTestId)
    expect(testMessage).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: MessageProps = {
        [name]: value,
        bodyText: testBodyText
      }

      render(<Message {...classTestObject} />)

      const testStylingPropValueMessageGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueMessageGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render header text aswell as its body', () => {
    const headerAndBodyConfig = {
      headerText: testHeaderText,
      bodyText: testBodyText
    }
    render(<Message {...headerAndBodyConfig} />)
    const testHeader = screen.getByTestId(`${basicTestId}-header`)
    const testBody = screen.getByTestId(`${basicTestId}-body`)

    expect(testBody).toBeInTheDocument()
    expect(testHeader).toBeInTheDocument()
    expect(testHeader.textContent).toBe(testHeaderText)
    expect(testBody.textContent).toBe(testBodyText)
  })

  test('Should have a clickable button and function when is clicked', () => {
    const clickeableConfig = {
      headerText: testHeaderText,
      bodyText: testBodyText,
      onDeleteClick: jest.fn()
    }

    render(<Message {...clickeableConfig} />)

    const clickeableMessageButton = screen.getByTestId(`${basicTestId}-delete`)
    fireEvent.click(clickeableMessageButton)
    expect(clickeableConfig.onDeleteClick).toHaveBeenCalled()
  })
})
