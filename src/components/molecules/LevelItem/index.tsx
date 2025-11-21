import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { LevelItemProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const LevelItem: React.FC<LevelItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  content,
  isCentered = false
}) => {
  const levelItemClasses = parseClasses([
    'level-item',
    isCentered ? 'has-text-centered' : null,
    cssClasses
  ])
  const levelItemTestId =
    testId ??
    parseTestId({
      tag: 'level-item',
      parsedClasses: levelItemClasses,
      rules: [
        {
          regExp: /is-|has-/gm,
          replacer: '-'
        },
        {
          regExp: /level-item/gm,
          replacer: ''
        }
      ]
    })

  return (
    <section
      data-testid={levelItemTestId}
      className={levelItemClasses}
      style={style ?? undefined}
    >
      {content}
    </section>
  )
}

export default LevelItem
