import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { MenuItemProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const MenuItem: React.FC<MenuItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  text,
  isActive = null,
  onClick = null
}) => {
  const menuItemClasses = parseClasses([
    'menuItem',
    isActive ? 'is-active' : null,
    cssClasses
  ])
  const menuItemTestId =
    testId ?? parseTestId({ tag: 'menuItem', parsedClasses: menuItemClasses })

  return (
    <a
      data-testid={menuItemTestId}
      className={menuItemClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {text}
    </a>
  )
}

export default MenuItem
