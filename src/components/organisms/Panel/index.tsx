import React, { useMemo } from 'react'
// COMPONENTS
import { PanelBlock, PanelTabs } from '@components/molecules'
// TYPES & INTERFACES
import { PanelProps } from '@interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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

  const memoizedTabs = useMemo(
    () => (panelTabs ? <PanelTabs {...panelTabs} /> : null),
    [panelTabs]
  )
  const memoizedBlocks = useMemo(
    () =>
      blockList.map(blockConfig => (
        <PanelBlock
          key={`panel-block-item-${generateKey()}`}
          {...blockConfig}
        />
      )),
    [blockList]
  )

  return (
    <article
      data-testid={panelTestId}
      className={panelClasses}
      style={style ?? undefined}
    >
      <p className='panel-heading'>{headerText}</p>
      {memoizedTabs}
      {memoizedBlocks}
    </article>
  )
}

export default Panel
