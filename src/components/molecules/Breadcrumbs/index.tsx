import React, { useMemo } from 'react'
// COMPONENTS
import { BreadcrumbItem } from '@components/atoms'
// TYPES & INTERFACES
import { BreadcrumbsProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'

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
  const breadcrumbsBaseClass = 'breadcrumb'
  const breadcrumbsContainerClasses = parseClasses([
    breadcrumbsBaseClass,
    alignment ? `${COMMON_CLASSES.IS}${alignment}` : null,
    separator ? `has-${separator}-separator` : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    containerCssClasses
  ])
  const breadcrumbsContainerTestId =
    containerTestId ??
    parseTestId({
      tag: breadcrumbsBaseClass,
      parsedClasses: breadcrumbsContainerClasses,
      rules: [
        { regExp: TEST_ID_REGEXP.BREADCRUMB, replacer: '' },
        { regExp: TEST_ID_REGEXP.IS_HAS, replacer: '-' }
      ]
    })

  const memoizedBreadcrumbs = useMemo(
    () =>
      items.map(itemConfig => (
        <BreadcrumbItem
          key={`${breadcrumbsBaseClass}-item-${generateKey()}`}
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
