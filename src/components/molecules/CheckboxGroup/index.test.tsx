import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import CheckboxGroup from '.'
// TYPES & INTERFACES
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('CheckboxGroup', () => {
  const { basicTestId, baseListOfCases } = testing

  test('Should render the component', () => {
    render(<CheckboxGroup listOfCheckboxes={baseListOfCases} />)
    const testCheckboxGroup = screen.getByTestId(basicTestId)

    expect(testCheckboxGroup).toBeInTheDocument()
  })
})
