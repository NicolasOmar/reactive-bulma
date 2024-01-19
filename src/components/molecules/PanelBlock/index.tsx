import React, { CSSProperties } from 'react'
// COMPONENTS
import InputControl from '../InputControl'
import { Button, Icon } from '../../atoms'
// TYPES & INTERFACES
import { ButtonProps, IconProps } from '../../../interfaces/atomProps'
import {
  InputControlProps,
  PanelBlockItemProps,
  PanelBlockProps
} from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const convertConfigToComponent = (
  { type, props }: PanelBlockItemProps,
  testId: string | null,
  cssClasses: string | null,
  style: CSSProperties | null,
  blockText: string | null
) => {
  switch (type) {
    case 'icon': {
      const panelBlockIconClasses = parseClasses(['panel-icon', cssClasses])
      const panelBlockIconTestId =
        testId ??
        parseTestId({ tag: 'panel-icon', parsedClasses: panelBlockIconClasses })

      return (
        <React.Fragment>
          <span
            data-testid={panelBlockIconTestId}
            className={panelBlockIconClasses}
            style={style ?? undefined}
          >
            <Icon {...(props as IconProps)} />
          </span>
          {blockText}
        </React.Fragment>
      )
    }
    case 'control':
      return <InputControl {...(props as InputControlProps)} />
    case 'button':
      return <Button {...(props as ButtonProps)} />
    default:
      return null
  }
}

const PanelBlock: React.FC<PanelBlockProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  config,
  blockText = null,
  isActive = false,
  onClick
}) => {
  const panelBlockLinkClasses = parseClasses([
    'panel-block',
    isActive ? 'is-active' : null,
    containerCssClasses
  ])
  const panelBlockLinkTestId =
    containerTestId ??
    parseTestId({ tag: 'panel-block', parsedClasses: panelBlockLinkClasses })

  return (
    <a
      data-testid={panelBlockLinkTestId}
      className={panelBlockLinkClasses}
      style={containerStyle ?? undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {convertConfigToComponent(config, testId, cssClasses, style, blockText)}
    </a>
  )
}

export default PanelBlock
