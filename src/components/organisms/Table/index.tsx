import React, { useMemo } from 'react'
// COMPONENTS
import { TableHeadCell } from '@components/atoms'
import { TableRow } from '@components/molecules'
// TYPES & INTERFACES
import { TableProps } from '@interfaces/organismProps'
import { TableHeadCellProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

interface TableElementProps {
  tableTestId: string
  tableClasses: string
  style: React.CSSProperties | null
  head: TableHeadCellProps[]
  body: TableProps['body']
  foot: TableHeadCellProps[] | null
}

const renderTableSection = (
  sectionName: 'head' | 'foot',
  configData: TableHeadCellProps[]
) => (
  <tr>
    {configData.map(_ItemConfig => (
      <TableHeadCell
        key={`table-${sectionName}-item-${generateKey()}`}
        {..._ItemConfig}
      />
    ))}
  </tr>
)

const TableElement: React.FC<TableElementProps> = ({
  tableTestId,
  tableClasses,
  style,
  head,
  body,
  foot
}) => (
  <table
    data-testid={tableTestId}
    className={tableClasses}
    style={style ?? undefined}
  >
    <thead data-testid={`${tableTestId}-head`}>
      {renderTableSection('head', head)}
    </thead>
    <tbody data-testid={`${tableTestId}-body`}>
      {body.map(_bodyRowConfig => (
        <TableRow
          key={`table-body-item-${generateKey()}`}
          {..._bodyRowConfig}
        />
      ))}
    </tbody>
    {foot ? (
      <tfoot data-testid={`${tableTestId}-foot`}>
        {renderTableSection('foot', foot)}
      </tfoot>
    ) : null}
  </table>
)

const Table: React.FC<TableProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  head,
  body,
  foot = null,
  isBordered = false,
  isStriped = false,
  isNarrow = false,
  isHoverable = false,
  isFullwidth = false,
  isContained = false
}) => {
  const tableClasses = parseClasses([
    'table',
    isBordered ? 'is-bordered' : null,
    isStriped ? 'is-striped' : null,
    isNarrow ? 'is-narrow' : null,
    isHoverable ? 'is-hoverable' : null,
    isFullwidth ? 'is-fullwidth' : null,
    cssClasses
  ])
  const tableTestId =
    testId ?? parseTestId({ tag: 'table', parsedClasses: tableClasses })

  return isContained ? (
    <section
      data-testid={`${tableTestId}-container`}
      className='table-container'
    >
      {
        <TableElement
          tableTestId={tableTestId}
          tableClasses={tableClasses}
          style={style}
          head={head}
          body={body}
          foot={foot}
        />
      }
    </section>
  ) : (
    <TableElement
      tableTestId={tableTestId}
      tableClasses={tableClasses}
      style={style}
      head={head}
      body={body}
      foot={foot}
    />
  )
}

export default Table
