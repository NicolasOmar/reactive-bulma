import React from 'react'
// COMPONENTS
import { PanelBlock, PanelTabs } from '../../molecules'
// TYPES & INTERFACES
import { PanelProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const generateHeader = (headerText: string) => (
  <p className='panel-heading'>{headerText}</p>
)

const Panel: React.FC<PanelProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  isACssTestClass = null,
  headerText,
  panelTabs = null,
  blockList
}) => {
  const panelClasses = parseClasses([
    'panel',
    isACssTestClass ? 'is-test-only-class' : null,
    cssClasses
  ])
  const panelTestId =
    testId ?? parseTestId({ tag: 'panel', parsedClasses: panelClasses })

  return (
    <section
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
    </section>
  )
}

export default Panel
