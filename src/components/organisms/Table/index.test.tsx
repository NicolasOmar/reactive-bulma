import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Table from '.'
// TYPES & INTERFACES
import { TableProps } from '@interfaces/organismProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { testing } from './index.mocks.json'

const testTableData = createObjArray<{ header: string; body: string }>({
  numberOfItems: 7,
  externalParser: i => ({
    header: `Header #${++i}`,
    body: `Row #${++i}`
  })
})
const headConfig = testTableData.map(({ header }) => ({ content: header }))
const bodyConfig = {
  listOfCells: testTableData.map(({ body }) => ({ content: body }))
}
const basicConfig = {
  head: headConfig,
  body: [bodyConfig]
} as TableProps

describe('Table', () => {
  const {
    basicTestId,
    testClasses,
    basicHeadTestId,
    basicBodyTestId,
    basicFootTestId,
    basicContainerTestId
  } = testing

  const runGetByTestIdCases = () => {
    const testTable = screen.getByTestId(basicTestId)
    const testTableHead = screen.getByTestId(basicHeadTestId)
    const testTableBody = screen.getByTestId(basicBodyTestId)
    const testTableFoot = screen.getByTestId(basicFootTestId)
    expect(testTable).toBeInTheDocument()
    expect(testTableHead).toBeInTheDocument()
    expect(testTableBody).toBeInTheDocument()
    expect(testTableFoot).toBeInTheDocument()
  }

  test('Should render the component', () => {
    const fullTableConfig = {
      ...basicConfig,
      foot: headConfig
    } as TableProps

    render(<Table {...fullTableConfig} />)
    runGetByTestIdCases()
  })

  test('Should render the component with a container', () => {
    const fullTableConfig = {
      ...basicConfig,
      foot: headConfig,
      isContained: true
    } as TableProps

    render(<Table {...fullTableConfig} />)
    runGetByTestIdCases()
    const testTableContainer = screen.getByTestId(basicContainerTestId)
    expect(testTableContainer).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: TableProps = {
        ...basicConfig,
        [name]: value
      }

      render(<Table {...classTestObject} />)

      const testStylingPropValueTable = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTable.className).toContain(result)
      cleanup()
    })
  })
})
