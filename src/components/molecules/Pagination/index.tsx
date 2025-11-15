import React, { useCallback, useMemo } from 'react'
// COMPONENTS
import { PaginationItem } from '@components/atoms'
// TYPES & INTERFACES
import {
  PaginationNavigationButtonProps,
  PaginationProps
} from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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

  const memoizedRenderNavigationButton = useCallback(
    (navigationButton: PaginationNavigationButtonProps | null) =>
      renderNavigationButton(navigationButton),
    []
  )

  const memoizedPages = useMemo(() => {
    const renderedEllipsis = hasEllipsis ? (
      <li>
        <span
          aria-hidden='true'
          className='pagination-ellipsis'
        >
          &hellip;
        </span>
      </li>
    ) : null

    return pages.map((pageItem, pageIndex, { length }) => {
      const lastEllipsisItemIndex = length - ellipsisItems - 1
      const renderedPaginationItem = (
        <li>
          <PaginationItem {...pageItem} />
        </li>
      )

      if (pageIndex === 0) {
        return (
          <React.Fragment key={`first-pagination-item`}>
            {renderedPaginationItem}
            {renderedEllipsis}
          </React.Fragment>
        )
      }

      if (
        !hasEllipsis ||
        (pageIndex > ellipsisItems && pageIndex < lastEllipsisItemIndex)
      ) {
        return (
          <li>
            <PaginationItem
              key={`pagination-item-${generateKey()}`}
              {...pageItem}
            />
          </li>
        )
      }

      if (pageIndex === --length) {
        return (
          <React.Fragment key={`last-pagination-item`}>
            {renderedEllipsis}
            {renderedPaginationItem}
          </React.Fragment>
        )
      }
    })
  }, [pages, hasEllipsis, ellipsisItems])

  return (
    <nav
      data-testid={paginationContainerTestId}
      className={paginationContainerClasses}
      style={containerStyle ?? undefined}
      role='navigation'
      aria-label='pagination'
    >
      {memoizedRenderNavigationButton(showPreviousPageButton)}
      {memoizedRenderNavigationButton(showNextPageButton)}
      <ul
        data-testid={paginationTestId}
        className={paginationClasses}
        style={style ?? undefined}
      >
        {memoizedPages}
      </ul>
    </nav>
  )
}

export default Pagination
