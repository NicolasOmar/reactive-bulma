import React from 'react'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// COMPONENTS
import { Button } from '../../atoms'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  buttonList,
  isAttached = false,
  position = 'left'
}) => {
  const buttonGroupClasses = parseClasses([
    'buttons',
    isAttached ? 'has-addons' : null,
    !position || position === 'left' ? null : `is-${position}`,
    cssClasses
  ])
  const buttonGroupTestId =
    testId ??
    parseTestId({
      tag: 'buttons',
      parsedClasses: buttonGroupClasses,
      rules: [
        {
          regExp: /has-|is-/gm,
          replacer: '-'
        },
        {
          regExp: /buttons/gm,
          replacer: ''
        }
      ]
    })

  return (
    <section
      data-testid={buttonGroupTestId}
      className={buttonGroupClasses}
      style={style ?? undefined}
    >
      {buttonList.map((buttonItem, i) => (
        <Button
          key={i}
          {...buttonItem}
        />
      ))}
    </section>
  )
}

export default ButtonGroup
