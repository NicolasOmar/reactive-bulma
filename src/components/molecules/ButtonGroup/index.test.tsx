import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import ButtonGroup from '.'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// MOCKS
import mocks from './index.mocks.json'

describe('ButtonGroup', () => {
  const { basicTestId, basicGroup, testClasses } = mocks.testing

  test('Should render with a list a buttons', () => {
    render(<ButtonGroup {...(basicGroup as ButtonGroupProps)} />)

    const testButtonGroup = screen.getByTestId(basicTestId)
    expect(testButtonGroup).toBeInTheDocument()

    basicGroup.buttonList.forEach(({ text }) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    )
  })

  test('Should render the button group with specfic classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /has-|is-/gm,
        ''
      )}`
      const classTestObject = {
        ...basicGroup,
        [name]: value
      }

      render(<ButtonGroup {...(classTestObject as ButtonGroupProps)} />)

      const testClassButtonGroup = screen.getByTestId(testIdWithClass)
      expect(testClassButtonGroup.className).toContain(result)
      cleanup()
    })
  })
})
