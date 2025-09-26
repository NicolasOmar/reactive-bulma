import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { PaginationItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const PaginationItem: React.FC<PaginationItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  text,
  labelText = 'Page',
  currentLabelText = 'Go to page',
  isSelected = null,
  onClick = null
}) => {
  const paginationItemClasses = parseClasses([
    'pagination-link',
    isSelected ? 'is-current' : null,
    cssClasses
  ])
  const paginationItemTestId =
    testId ??
    parseTestId({
      tag: 'pagination-link',
      parsedClasses: paginationItemClasses
    })
  const parsedLabelText = isSelected ? currentLabelText : labelText

  return (
    <a
      data-testid={paginationItemTestId}
      className={paginationItemClasses}
      style={style ?? undefined}
      aria-label={`${parsedLabelText} ${text}`}
      aria-current={isSelected ? 'page' : undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {text}
    </a>
  )
}

export default PaginationItem
