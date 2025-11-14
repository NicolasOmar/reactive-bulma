import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { BreadcrumbItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  text,
  isActiveItem = null,
  onClick = null
}) => {
  const breadcrumbItemContainerClasses = useMemo(
    () =>
      parseClasses([
        'breadcrumb-item-container',
        isActiveItem ? 'is-active' : null,
        containerCssClasses
      ]),
    [isActiveItem, containerCssClasses]
  )
  const breadcrumbItemClasses = useMemo(
    () => parseClasses(['breadcrumbItem', cssClasses]),
    [cssClasses]
  )
  const breadcrumbItemContainerTestId = useMemo(
    () =>
      containerTestId ??
      parseTestId({
        tag: 'breadcrumb-item-container',
        parsedClasses: containerCssClasses ?? ''
      }),
    [containerTestId, containerCssClasses]
  )
  const breadcrumbItemTestId = useMemo(
    () =>
      testId ??
      parseTestId({
        tag: 'breadcrumbItem',
        parsedClasses: breadcrumbItemClasses
      }),
    [testId, breadcrumbItemClasses]
  )

  return (
    <li
      data-testid={breadcrumbItemContainerTestId}
      className={breadcrumbItemContainerClasses}
      style={containerStyle ?? undefined}
    >
      <a
        data-testid={breadcrumbItemTestId}
        className={breadcrumbItemClasses}
        style={style ?? undefined}
        aria-hidden='true'
        onClick={onClick ?? undefined}
      >
        {text}
      </a>
    </li>
  )
}

export default BreadcrumbItem
