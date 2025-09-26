import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import TableHeadCell from '.'
// TYPES & INTERFACES
import { TableHeadCellProps } from '@interfaces/atomProps'
// FUNCTIONS
import { renderTestingTableContainer } from '@functions/jest'
// MOCKS
import { testing } from './index.mocks.json'

describe('TableHeadCell', () => {
  const { basicTestId, testBaseConfig } = testing

  test('Should render the component', () => {
    renderTestingTableContainer(<TableHeadCell {...testBaseConfig} />)
    const testTableHeadCell = screen.getByTestId(basicTestId)

    expect(testTableHeadCell).toBeInTheDocument()
  })

  test('Should check that the component has been clicked', () => {
    const clickeableConfig = {
      ...testBaseConfig,
      onClick: jest.fn()
    } as TableHeadCellProps

    renderTestingTableContainer(<TableHeadCell {...clickeableConfig} />)

    const clickInput = screen.getByTestId(basicTestId)

    fireEvent.click(clickInput)
    expect(clickeableConfig.onClick).toHaveBeenCalled()
    expect(clickeableConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
