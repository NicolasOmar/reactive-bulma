import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { PaginationProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseKey, parseTestId } from '../../../functions/parsers'
import { PaginationItem } from '../../atoms'

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

const Pagination: React.FC<PaginationProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  pages,
  ellipsisItems = 0,
  showPreviousPageButton = { text: 'Previous' },
  showNextPageButton = { text: 'Next page' },
  hasEllipsis = false,
  isRounded = false,
  size = null
}) => {
  const paginationContainerClasses = parseClasses([
    'pagination',
    isRounded ? 'is-rounded' : null,
    size,
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

  const renderPages = () => {
    /**
     * TODOS
     * - Add the position property to relocate the items
     * - Work on stories
     * - Work on UT cases
     */

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
            key={`pagination-item-${parseKey()}`}
            {...pageItem}
          />
        )
      }

      if (pageIndex === --length) {
        return (
          <React.Fragment key={`first-pagination-item`}>
            {renderEllipsis(hasEllipsis)}
            <PaginationItem {...pageItem} />
          </React.Fragment>
        )
      }
    })
  }

  return (
    <nav
      data-testid={paginationContainerTestId}
      className={paginationContainerClasses}
      style={containerStyle ?? undefined}
      role='navigation'
      aria-label='pagination'
    >
      {showPreviousPageButton ? (
        <a
          className='pagination-previous'
          onClick={showPreviousPageButton.onClick ?? undefined}
          aria-hidden='true'
        >
          {showPreviousPageButton.text}
        </a>
      ) : null}
      {showNextPageButton ? (
        <a
          className='pagination-next'
          onClick={showNextPageButton.onClick ?? undefined}
          aria-hidden='true'
        >
          {showNextPageButton.text}
        </a>
      ) : null}
      <ul
        data-testid={paginationTestId}
        className={paginationClasses}
        style={style ?? undefined}
      >
        {renderPages()}
      </ul>
    </nav>
  )
}

export default Pagination
