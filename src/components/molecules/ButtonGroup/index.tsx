import React from 'react'
// TYPES & INTERFACES
import { ButtonGroupProps } from '../../../interfaces/moleculeProps'
// COMPONENTS
import { Button } from '../../atoms'
// PARSERS
import { parseClasses } from '../../../functions/parsers'

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonList,
  isAttached = false
}) => {
  const buttonGroupClasses = parseClasses([
    'buttons',
    isAttached ? 'has-addons' : null
  ])

  return (
    <section className={buttonGroupClasses}>
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
