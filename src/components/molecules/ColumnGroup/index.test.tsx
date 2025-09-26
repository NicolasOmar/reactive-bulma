import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import ColumnGroup from '.'
// TYPES & INTERFACES
import { ColumnGroupProps } from '@interfaces/moleculeProps'
// MOCKS
import { testing } from './index.mocks.json'

describe('ColumnGroup', () => {
  const { basicTestId, testParagraph, testClasses } = testing

  test('Should render without columns', () => {
    render(<ColumnGroup listOfColumns={[]} />)
    const testColumnGroup = screen.getByTestId(basicTestId)
    expect(testColumnGroup).toBeInTheDocument()
  })

  test('Should render the passed column', () => {
    const testColumnConfig = {
      listOfColumns: [{ children: <p>{testParagraph}</p> }]
    }

    render(<ColumnGroup {...testColumnConfig} />)
    const testColumnGroup = screen.getByTestId(basicTestId)
    expect(testColumnGroup).toBeInTheDocument()
    const testRenderedColumn = screen.getByText(testParagraph)
    expect(testRenderedColumn).toBeInTheDocument()
  })

  test('Should render the column group with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `test-columns-${result.replace('is-', '')}${
        name === 'gap' ? '' : '-3'
      }`
      const classTestObject: ColumnGroupProps = {
        listOfColumns: [],
        [name]: value
      }

      render(<ColumnGroup {...classTestObject} />)

      const testClassColumnGroup = screen.getByTestId(testIdWithClass)
      expect(testClassColumnGroup.className).toContain(result)
      cleanup()
    })
  })
})
