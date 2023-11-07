import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Message from '.'
// TYPES & INTERFACES
import { MessageProps } from '../../../interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('Message', () => {
  const { basicTestId, testClasses, testBodyText } = testing

  test('Should render the component', () => {
    render(<Message bodyText={testBodyText} />)
    const testMessage = screen.getByTestId(basicTestId)
    expect(testMessage).toBeInTheDocument()
  })

  test.skip('Should render the component with specific classes', () => {
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
})
