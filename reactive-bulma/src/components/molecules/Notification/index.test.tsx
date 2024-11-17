import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Notification from '.'
// TYPES & INTERFACES
import { NotificationProps } from '../../../interfaces/moleculeProps'
import { DeleteProps } from '../../../interfaces/atomProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Notification', () => {
  const { basicTestId, testParagraph, testClasses } = testing

  test('Should render with required props only', () => {
    render(<Notification />)
    const testNotification = screen.getByTestId(basicTestId)
    expect(testNotification).toBeInTheDocument()
  })

  test('Should render the passed text', () => {
    const testNotificationConfig = { children: <p>{testParagraph}</p> }

    render(<Notification {...testNotificationConfig} />)
    const testRenderedText = screen.getByText(testParagraph)
    expect(testRenderedText).toBeInTheDocument()
  })

  test('Should render the notification group with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace('is-', '')}`
      const classTestObject: NotificationProps = { [name]: value }

      render(<Notification {...classTestObject} />)

      const testClassNotification = screen.getByTestId(testIdWithClass)
      expect(testClassNotification.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the delete button', () => {
    const deleteButtonTestId = 'test-delete-medium'
    const deleteButtonConfig = {
      deleteButton: { size: 'is-medium' }
    } as DeleteProps

    render(<Notification {...deleteButtonConfig} />)
    const testDeleteButton = screen.getByTestId(deleteButtonTestId)
    expect(testDeleteButton).toBeInTheDocument()
  })
})
