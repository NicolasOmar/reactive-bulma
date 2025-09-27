import React from 'react'
// COMPONENTS
import Icon from '../Icon'
// TYPES & INTERFACES
import { TabItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseTestId } from '@functions/parsers'

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
  const tabItemContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'tab-item-container',
      parsedClasses: containerCssClasses ?? ''
    })
  const tabItemTestId =
    testId ?? parseTestId({ tag: 'tab-item', parsedClasses: cssClasses ?? '' })

  return (
    <a
      data-testid={tabItemContainerTestId}
      className={containerCssClasses ?? undefined}
      style={containerStyle ?? undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {icon ? <Icon {...icon} /> : null}
      <span
        data-testid={tabItemTestId}
        className={cssClasses ?? undefined}
        style={style ?? undefined}
      >
        {text}
      </span>
    </a>
  )
}

export default TabItem
