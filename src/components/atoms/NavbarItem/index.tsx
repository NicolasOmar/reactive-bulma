import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { NavbarItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const NavbarItem: React.FC<NavbarItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children,
  isActive = false,
  onClick = null
}) => {
  const navbarItemClasses = parseClasses([
    'navbar-item',
    isActive ? 'is-active' : null,
    cssClasses
  ])
  const navbarItemTestId =
    testId ??
    parseTestId({ tag: 'navbar-item', parsedClasses: navbarItemClasses })

  return (
    <a
      data-testid={navbarItemTestId}
      className={navbarItemClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    >
      {children}
    </a>
  )
}

export default NavbarItem
