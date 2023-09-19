import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import ButtonGroup from '.'

describe('ButtonGroup', () => {
  test('Should render with a list a buttons', () => {
    const testList = [{ text: 'Hello' }, { text: 'There' }]

    render(
      <ButtonGroup
        buttonList={testList}
        isAttached={true}
      />
    )

    testList.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument()
    })
  })

  test('Should render with a list a buttons', () => {
    const testList = [{ text: 'Hello' }, { text: 'There' }]

    render(<ButtonGroup buttonList={testList} />)

    testList.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument()
    })
  })
})
