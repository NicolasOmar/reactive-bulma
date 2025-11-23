import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TableCell from '.'
// TYPES & INTERFACES
import { TableCellProps } from '@interfaces/atomProps'
// CONSTANTS
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { renderTestingTableContainer } from '@functions/jest'
// MOCKS
import { testing } from './index.mocks.json'

describe('TableCell', () => {
  const { basicTestId, testBaseConfig, testClasses } = testing

  test('Should render the component', () => {
    renderTestingTableContainer(<TableCell {...testBaseConfig} />)
    const testTableCell = screen.getByTestId(basicTestId)

    expect(testTableCell).toBeInTheDocument()
  })

  test('Should render the button with specific classes', () => {
    Object.keys(testClasses).forEach(prop => {
      const classValue = (testClasses as Record<string, string>)[prop]
      const classObj = { ...testBaseConfig, [prop]: classValue }
      const testIdWithClass = `${basicTestId}-${classValue.replace(TEST_ID_REGEXP.IS, '')}`
      render(<TableCell {...classObj} />)
      const testClassButton = screen.getByTestId(testIdWithClass)
      expect(testClassButton.className).toContain(classValue)
      cleanup()
    })
  })

  test('Should check that the component has been clicked', () => {
    const clickeableConfig = {
      ...testBaseConfig,
      onClick: jest.fn()
    } as TableCellProps

    renderTestingTableContainer(<TableCell {...clickeableConfig} />)

    const clickInput = screen.getByTestId(basicTestId)

    fireEvent.click(clickInput)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
