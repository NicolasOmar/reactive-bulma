import React from 'react'
// COMPONENTS
import { PanelBlock, PanelTabs } from '@components/molecules'
// TYPES & INTERFACES
import { PanelProps } from '@interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const generateHeader = (headerText: string) => (
  <p className='panel-heading'>{headerText}</p>
)

const Panel: React.FC<PanelProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  headerText,
  panelTabs = null,
  blockList,
  color = null
}) => {
  const panelClasses = parseClasses(['panel', color, cssClasses])
  const panelTestId =
    testId ?? parseTestId({ tag: 'panel', parsedClasses: panelClasses })

  return (
    <article
      data-testid={panelTestId}
      className={panelClasses}
      style={style ?? undefined}
    >
      {generateHeader(headerText)}
      {panelTabs ? <PanelTabs {...panelTabs} /> : null}
      {blockList.map(blockConfig => (
        <PanelBlock
          key={`panel-block-item-${generateKey()}`}
          {...blockConfig}
        />
      ))}
    </article>
  )
}

export default Panel
