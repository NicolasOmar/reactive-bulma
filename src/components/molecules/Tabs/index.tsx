import React, { useMemo } from 'react'
// COMPONENTS
import { TabItem } from '@components/atoms'
// TYPES & INTERFACES
import { TabsProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const Tabs: React.FC<TabsProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  tabs,
  alignment = null,
  size = null,
  format = null,
  isRounded = null,
  isFullWidth = null
}) => {
  const tabsClasses = parseClasses([
    'tabs',
    alignment ? `${COMMON_CLASSES.IS}${alignment}` : null,
    size ? `${COMMON_CLASSES.IS}${size}` : null,
    format ? `${COMMON_CLASSES.IS}${format}` : null,
    isRounded ? COMMON_CLASSES.TOGGLE_ROUNDED : null,
    isFullWidth ? COMMON_CLASSES.FULL_WIDTH : null,
    cssClasses
  ])
  const tabsTestId =
    testId ?? parseTestId({ tag: 'tabs', parsedClasses: tabsClasses })

  const memoizedTabs = useMemo(
    () =>
      tabs.map(tabConfig => (
        <li
          key={`tab-item-${generateKey()}`}
          className={tabConfig.isActive ? COMMON_CLASSES.ACTIVE : undefined}
        >
          {<TabItem {...tabConfig} />}
        </li>
      )),
    [tabs]
  )

  return (
    <section
      data-testid={tabsTestId}
      className={tabsClasses}
      style={style ?? undefined}
    >
      <ul>{memoizedTabs}</ul>
    </section>
  )
}

export default Tabs
