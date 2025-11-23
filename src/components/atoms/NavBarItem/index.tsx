import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { NavBarItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const NavBarItem: React.FC<NavBarItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children,
  isActive = false,
  onClick = null
}) => {
  const navBarItemClasses = parseClasses([
    'navbar-item',
    isActive ? 'is-selected' : null,
    cssClasses
  ])
  const navBarItemTestId =
    testId ??
    parseTestId({ tag: 'navbar-item', parsedClasses: navBarItemClasses })

  return (
    <a
      data-testid={navBarItemTestId}
      className={navBarItemClasses}
      style={style ?? undefined}
      aria-hidden='true'
      onClick={onClick ?? undefined}
    >
      {children}
    </a>
  )
}

export default NavBarItem
