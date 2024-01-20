import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { PanelTabsProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const PanelTabs: React.FC<PanelTabsProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  tabList
}) => {
  const panelTabsClasses = parseClasses(['panel-tabs', cssClasses])
  const panelTabsTestId =
    testId ??
    parseTestId({ tag: 'panel-tabs', parsedClasses: panelTabsClasses })

  return (
    <section
      data-testid={panelTabsTestId}
      className={panelTabsClasses}
      style={style ?? undefined}
    >
      {tabList.map(tabItem => {
        return (
          <a
            key={`tab-item-${generateKey()}`}
            className={tabItem.isActive ? 'is-active' : undefined}
            aria-hidden='true'
            onClick={tabItem.onClick ?? undefined}
          >
            {tabItem.text}
          </a>
        )
      })}
    </section>
  )
}

export default PanelTabs
