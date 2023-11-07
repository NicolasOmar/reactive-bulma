import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Message from '.'
// TYPES & INTERFACES
import { MessageProps } from '../../../interfaces/moleculeProps'
import { DeleteProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Message', () => {
  const { basicTestId, testClasses, testBodyText, testHeaderText } = testing
  const headerAndBodyConfig = {
    headerText: testHeaderText,
    bodyText: testBodyText
  }

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
    render(<Message {...headerAndBodyConfig} />)
    const testHeader = screen.getByTestId(`${basicTestId}-header`)
    const testBody = screen.getByTestId(`${basicTestId}-body`)

    expect(testBody).toBeInTheDocument()
    expect(testHeader).toBeInTheDocument()
    expect(testHeader.textContent).toBe(testHeaderText)
    expect(testBody.textContent).toBe(testBodyText)
  })

  test('Should have a clickable button and function when is clicked', () => {
    const deleteButtonTestId = 'test-delete-medium'
    const deleteButtonConfig = {
      deleteButton: { size: 'is-medium' }
    } as DeleteProps

    render(
      <Message
        {...{
          ...headerAndBodyConfig,
          ...deleteButtonConfig
        }}
      />
    )

    const clickeableMessageButton = screen.getByTestId(deleteButtonTestId)
    expect(clickeableMessageButton).toBeInTheDocument()
  })
})
