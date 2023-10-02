import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Notification from '.'
// TYPES & INTERFACES
import { NotificationProps } from '../../../interfaces/moleculeProps'
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

  test('Should render the notification group with specfic classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace('is-', '')}`
      const classTestObject: NotificationProps = { [name]: value }

      render(<Notification {...classTestObject} />)

      const testClassNotification = screen.getByTestId(testIdWithClass)
      expect(testClassNotification.className).toContain(result)
      cleanup()
    })
  })
})
