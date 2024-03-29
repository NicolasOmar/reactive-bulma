import React from 'react'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// COMPONENTS
import { Button } from '../../atoms'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

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
      {buttonList.map((currentButtonItem, _, originalButtonList) => {
        const hasSelectedButton = originalButtonList.some(
          ({ isSelected }) => isSelected
        )
        const shouldApplyColor =
          (hasSelectedButton && currentButtonItem.isSelected) ||
          !hasSelectedButton
        const buttonConfig = {
          ...currentButtonItem,
          color: shouldApplyColor ? currentButtonItem.color : undefined
        }

        return (
          <Button
            key={`button-group-item-${generateKey()}`}
            {...buttonConfig}
          />
        )
      })}
    </section>
  )
}

export default ButtonGroup
