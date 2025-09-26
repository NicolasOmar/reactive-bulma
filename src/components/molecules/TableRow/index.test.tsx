import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TableRow from '.'
// TYPES & INTERFACES
import { TableRowProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

const renderTestTable = (element: React.ReactElement) =>
  render(
    <table>
      <tbody>{element}</tbody>
    </table>
  )

describe('TableRow', () => {
  const {
    basicTestId,
    headTestId,
    testBaseConfig,
    testHeadCellConfig,
    testClasses
  } = testing

  test('Should render the component', () => {
    renderTestTable(<TableRow {...testBaseConfig} />)
    const testTableRow = screen.getByTestId(basicTestId)

    expect(testTableRow).toBeInTheDocument()
  })

  test('Should render the component with the header', () => {
    const fullRowConfig = {
      ...testBaseConfig,
      ...testHeadCellConfig
    }
    renderTestTable(<TableRow {...fullRowConfig} />)
    const testTableRowHeaderCell = screen.getByTestId(headTestId)

    expect(testTableRowHeaderCell).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: TableRowProps = {
        ...testBaseConfig,
        [name]: value
      }

      renderTestTable(<TableRow {...classTestObject} />)

      const testStylingPropValueTableRowGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueTableRowGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should check that the component has been clicked', () => {
    const clickeableConfig = {
      ...testBaseConfig,
      onClick: jest.fn()
    } as TableRowProps

    renderTestTable(<TableRow {...clickeableConfig} />)

    const clickTableRow = screen.getByTestId(basicTestId)

    fireEvent.click(clickTableRow)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
