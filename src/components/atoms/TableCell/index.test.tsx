import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TableCell from '.'
// TYPES & INTERFACES
import { TableCellProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { renderTestingTableContainer } from '../../../functions/jest'
// MOCKS
import { testing } from './index.mocks.json'

describe('TableCell', () => {
  const { basicTestId, testBaseConfig } = testing

  test('Should render the component', () => {
    renderTestingTableContainer(<TableCell {...testBaseConfig} />)
    const testTableCell = screen.getByTestId(basicTestId)

    expect(testTableCell).toBeInTheDocument()
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
