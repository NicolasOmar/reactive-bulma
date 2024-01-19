import React from 'react'
// COMPONENTS
import Icon from '../Icon'
// TYPES & INTERFACES
import { TabItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const TabItem: React.FC<TabItemProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  icon = null,
  text,
  onClick = null
}) => {
  const tabItemContainerClasses = parseClasses([
    'tabItem-container',
    null,
    containerCssClasses
  ])
  const tabItemClasses = parseClasses(['tabItem', cssClasses])
  const tabItemContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'tabItem-container',
      parsedClasses: tabItemContainerClasses
    })
  const tabItemTestId =
    testId ?? parseTestId({ tag: 'tabItem', parsedClasses: tabItemClasses })

  return (
    <a
      data-testid={tabItemContainerTestId}
      className={tabItemContainerClasses}
      style={containerStyle ?? undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {icon ? <Icon {...icon} /> : null}
      <span
        data-testid={tabItemTestId}
        className={tabItemClasses}
        style={style ?? undefined}
      >
        {text}
      </span>
    </a>
  )
}

export default TabItem
