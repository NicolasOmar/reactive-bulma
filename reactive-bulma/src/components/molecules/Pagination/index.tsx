import React from 'react'
// COMPONENTS
import { PaginationItem } from '../../atoms'
// TYPES & INTERFACES
import {
  PaginationNavigationButtonProps,
  PaginationProps
} from '../../../interfaces/moleculeProps'
import { PaginationItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderEllipsis = (hasEllipsis: boolean) =>
  hasEllipsis ? (
    <li>
      <span
        aria-hidden='true'
        className='pagination-ellipsis'
      >
        &hellip;
      </span>
    </li>
  ) : null

const renderNavigationButton = (
  navigationButton: PaginationNavigationButtonProps | null
) => {
  if (!navigationButton) return null

  const navigationButtonClasses = parseClasses([
    navigationButton.cssClasses,
    navigationButton.isDisabled ? 'is-disabled' : null
  ])

  return (
    <a
      className={navigationButtonClasses}
      onClick={navigationButton.onClick ?? undefined}
      aria-hidden='true'
    >
      {navigationButton.text}
    </a>
  )
}

const renderPages = (
  pages: PaginationItemProps[],
  hasEllipsis: boolean,
  ellipsisItems: number
) => {
  return pages.map((pageItem, pageIndex, { length }) => {
    const lastEllipsisItemIndex = length - ellipsisItems - 1

    if (pageIndex === 0) {
      return (
        <React.Fragment key={`first-pagination-item`}>
          <PaginationItem {...pageItem} />
          {renderEllipsis(hasEllipsis)}
        </React.Fragment>
      )
    }

    if (
      !hasEllipsis ||
      (pageIndex > ellipsisItems && pageIndex < lastEllipsisItemIndex)
    ) {
      return (
        <PaginationItem
          key={`pagination-item-${generateKey()}`}
          {...pageItem}
        />
      )
    }

    if (pageIndex === --length) {
      return (
        <React.Fragment key={`last-pagination-item`}>
          {renderEllipsis(hasEllipsis)}
          <PaginationItem {...pageItem} />
        </React.Fragment>
      )
    }
  })
}

const Pagination: React.FC<PaginationProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  pages,
  ellipsisItems = 0,
  showPreviousPageButton = {
    text: 'Previous',
    cssClasses: 'pagination-previous'
  },
  showNextPageButton = {
    text: 'Next page',
    cssClasses: 'pagination-next'
  },
  hasEllipsis = false,
  isRounded = false,
  alignment = null,
  size = null
}) => {
  const paginationContainerClasses = parseClasses([
    'pagination',
    isRounded ? 'is-rounded' : null,
    size,
    alignment,
    cssClasses
  ])
  const paginationContainerTestId =
    testId ??
    parseTestId({
      tag: 'pagination',
      parsedClasses: paginationContainerClasses
    })
  const paginationClasses = parseClasses([
    'pagination-list',
    containerCssClasses
  ])
  const paginationTestId =
    containerTestId ??
    parseTestId({ tag: 'pagination-list', parsedClasses: paginationClasses })

  return (
    <nav
      data-testid={paginationContainerTestId}
      className={paginationContainerClasses}
      style={containerStyle ?? undefined}
      role='navigation'
      aria-label='pagination'
    >
      {renderNavigationButton(showPreviousPageButton)}
      {renderNavigationButton(showNextPageButton)}
      <ul
        data-testid={paginationTestId}
        className={paginationClasses}
        style={style ?? undefined}
      >
        {renderPages(pages, hasEllipsis, ellipsisItems)}
      </ul>
    </nav>
  )
}

export default Pagination
