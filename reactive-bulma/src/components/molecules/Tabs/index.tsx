import React from 'react'
// COMPONENTS
import { TabItem } from '../../atoms'
// TYPES & INTERFACES
import { TabsProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

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
    alignment,
    size,
    format,
    isRounded ? 'is-toggle-rounded' : null,
    isFullWidth ? 'is-fullwidth' : null,
    cssClasses
  ])
  const tabsTestId =
    testId ?? parseTestId({ tag: 'tabs', parsedClasses: tabsClasses })

  return (
    <section
      data-testid={tabsTestId}
      className={tabsClasses}
      style={style ?? undefined}
    >
      <ul>
        {tabs.map(tabConfig => (
          <li
            key={`tab-item-${generateKey()}`}
            className={tabConfig.isActive ? 'is-active' : undefined}
          >
            {<TabItem {...tabConfig} />}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs
