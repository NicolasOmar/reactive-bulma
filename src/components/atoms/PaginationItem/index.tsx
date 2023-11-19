import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { PaginationItemProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const PaginationItem: React.FC<PaginationItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  text,
  labelText = 'Page',
  currentLabelText = 'Go to page',
  isCurrent = null,
  onClick = null
}) => {
  const paginationItemClasses = parseClasses([
    'pagination-link',
    isCurrent ? 'is-current' : null,
    cssClasses
  ])
  const paginationItemTestId =
    testId ??
    parseTestId({
      tag: 'pagination-link',
      parsedClasses: paginationItemClasses
    })
  const parsedLabelText = isCurrent ? currentLabelText : labelText

  return (
    <a
      data-testid={paginationItemTestId}
      className={paginationItemClasses}
      style={style ?? undefined}
      aria-label={`${parsedLabelText} ${text}`}
      aria-current={isCurrent ? 'page' : undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {text}
    </a>
  )
}

export default PaginationItem
