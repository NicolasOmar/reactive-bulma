import React from 'react'
// TYPES & INTERFACES
import { BreadcrumbItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

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
  const breadcrumbItemContainerClasses = parseClasses([
    'breadcrumb-item-container',
    isActiveItem ? 'is-active' : null,
    containerCssClasses
  ])
  const breadcrumbItemClasses = parseClasses(['breadcrumbItem', cssClasses])
  const breadcrumbItemContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'breadcrumb-item-container',
      parsedClasses: containerCssClasses ?? ''
    })
  const breadcrumbItemTestId =
    testId ??
    parseTestId({ tag: 'breadcrumbItem', parsedClasses: breadcrumbItemClasses })

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
