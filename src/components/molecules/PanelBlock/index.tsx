import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { PanelBlockProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { Icon } from '../../atoms'

const PanelBlock: React.FC<PanelBlockProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  blockText,
  iconConfig,
  isActive = false,
  onClick
}) => {
  const panelBlockLinkClasses = parseClasses([
    'panel-block',
    isActive ? 'is-active' : null,
    containerCssClasses
  ])
  const panelBlockIconClasses = parseClasses(['panel-icon', cssClasses])
  const panelBlockLinkTestId =
    containerTestId ??
    parseTestId({ tag: 'panel-block', parsedClasses: panelBlockLinkClasses })
  const panelBlockIconTestId =
    testId ??
    parseTestId({ tag: 'panel-icon', parsedClasses: panelBlockIconClasses })

  return (
    <a
      data-testid={panelBlockLinkTestId}
      className={panelBlockLinkClasses}
      style={containerStyle ?? undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      <span
        data-testid={panelBlockIconTestId}
        className={panelBlockIconClasses}
        style={style ?? undefined}
      >
        <Icon {...iconConfig} />
      </span>
      {blockText}
    </a>
  )
}

export default PanelBlock
