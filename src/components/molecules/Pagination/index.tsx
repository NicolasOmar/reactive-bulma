import React, { useCallback, useMemo } from 'react'
// COMPONENTS
import { PaginationItem } from '@components/atoms'
// TYPES & INTERFACES
import {
  PaginationNavigationButtonProps,
  PaginationProps
} from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const paginationBaseClass = 'pagination'
const paginationListBaseClass = 'pagination-list'

const renderNavigationButton = (
  navigationButton: PaginationNavigationButtonProps | null
) => {
  if (!navigationButton) return null

  const navigationButtonClasses = parseClasses([
    navigationButton.cssClasses,
    navigationButton.isDisabled ? COMMON_CLASSES.DISABLED : null
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
    cssClasses: `${paginationBaseClass}-previous`
  },
  showNextPageButton = {
    text: 'Next page',
    cssClasses: `${paginationBaseClass}-next`
  },
  hasEllipsis = false,
  isRounded = false,
  alignment = null,
  size = null
}) => {
  const paginationContainerClasses = parseClasses([
    paginationBaseClass,
    isRounded ? COMMON_CLASSES.ROUNDED : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    alignment ? `${COMMON_CLASSES.IS}${alignment}` : null,
    cssClasses
  ])
  const paginationContainerTestId =
    testId ??
    parseTestId({
      tag: paginationBaseClass,
      parsedClasses: paginationContainerClasses
    })
  const paginationClasses = parseClasses([
    paginationListBaseClass,
    containerCssClasses
  ])
  const paginationTestId =
    containerTestId ??
    parseTestId({
      tag: paginationListBaseClass,
      parsedClasses: paginationClasses
    })

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
          className={`${paginationBaseClass}-ellipsis`}
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
          <React.Fragment key={`first-pagination-item-${generateKey()}`}>
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
          <li key={`${paginationBaseClass}-item-${generateKey()}`}>
            <PaginationItem {...pageItem} />
          </li>
        )
      }

      if (pageIndex === --length) {
        return (
          <React.Fragment
            key={`last-${paginationBaseClass}-item-${generateKey()}`}
          >
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
