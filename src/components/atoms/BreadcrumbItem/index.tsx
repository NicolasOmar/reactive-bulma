import React, { useMemo } from 'react'
// TYPES & INTERFACES
import { BreadcrumbItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import Icon from '../Icon'

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  text,
  icon = null,
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

  const memoizedBreadcrumb = useMemo(
    () => (
      <a
        data-testid={breadcrumbItemTestId}
        className={breadcrumbItemClasses}
        style={style ?? undefined}
        aria-hidden='true'
        onClick={onClick ?? undefined}
      >
        {icon ? <Icon {...icon} /> : null}
        {text}
      </a>
    ),
    [breadcrumbItemTestId, breadcrumbItemClasses, style, onClick, icon, text]
  )

  return (
    <li
      data-testid={breadcrumbItemContainerTestId}
      className={breadcrumbItemContainerClasses}
      style={containerStyle ?? undefined}
    >
      {memoizedBreadcrumb}
    </li>
  )
}

export default BreadcrumbItem
