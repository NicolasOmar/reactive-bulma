import React, { useMemo } from 'react'
// COMPONENTS
import { BreadcrumbItem } from '@components/atoms'
// TYPES & INTERFACES
import { BreadcrumbsProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  testId = 'breadcrumbs',
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  items,
  alignment = null,
  separator = null,
  size = null
}) => {
  const breadcrumbsContainerClasses = parseClasses([
    'breadcrumb',
    alignment,
    separator,
    size,
    containerCssClasses
  ])
  const breadcrumbsContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'breadcrumb',
      parsedClasses: breadcrumbsContainerClasses,
      rules: [
        {
          regExp: /breadcrumb/gm,
          replacer: ''
        },
        {
          regExp: /is-|has-/gm,
          replacer: '-'
        }
      ]
    })

  const memoizedBreadcrumbs = useMemo(
    () =>
      items.map(itemConfig => (
        <BreadcrumbItem
          key={`breadcrumb-item-${generateKey()}`}
          {...itemConfig}
        />
      )),
    [items]
  )

  return (
    <nav
      data-testid={breadcrumbsContainerTestId}
      className={breadcrumbsContainerClasses}
      style={containerStyle ?? undefined}
    >
      <ul
        data-testid={testId}
        className={cssClasses ?? undefined}
        style={style ?? undefined}
      >
        {memoizedBreadcrumbs}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
