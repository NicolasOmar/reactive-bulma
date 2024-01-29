import React from 'react'
// COMPONENTS
import { NavBarItem } from '../../atoms'
// TYPES & INTERFACES
import { NavBarDropdownProps } from '../../../interfaces/moleculeProps'
import { NavBarItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderDropdownItem = (dropdownItemConfig: NavBarItemProps | 'divider') =>
  dropdownItemConfig === 'divider' ? (
    <hr
      key={`navbar-dropdown-divider-${generateKey()}`}
      className='navbar-divider'
    />
  ) : (
    <NavBarItem
      key={`navbar-dropdown-item-${generateKey()}`}
      {...dropdownItemConfig}
    />
  )

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  text,
  items,
  position = null,
  isActive = false,
  isHoverable = false,
  hasDropdownUp = false,
  hasBoxedMenu = false
}) => {
  const navBarDropdownContainerClasses = parseClasses([
    'navbar-item',
    'has-dropdown',
    position,
    isActive ? 'is-active' : null,
    isHoverable ? 'is-hoverable' : null,
    hasDropdownUp ? 'has-dropdown-up' : null,
    containerCssClasses
  ])
  const navBarDropdownContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'navbar-dropdown-container',
      parsedClasses: navBarDropdownContainerClasses,
      rules: [
        { regExp: /navbar-item|has-dropdown/gm, replacer: '' },
        { regExp: /is-|has-/gm, replacer: '-' }
      ]
    })
  const navBarDropdownClasses = parseClasses([
    'navbar-dropdown',
    hasBoxedMenu ? 'is-boxed' : null,
    cssClasses
  ])
  const navBarDropdownTestId =
    testId ??
    parseTestId({
      tag: 'navbar-dropdown',
      parsedClasses: navBarDropdownClasses
    })

  return (
    <section
      data-testid={navBarDropdownContainerTestId}
      className={navBarDropdownContainerClasses}
      style={containerStyle ?? undefined}
    >
      <a
        className='navbar-link'
        aria-hidden='true'
      >
        {text}
      </a>

      <section
        data-testid={navBarDropdownTestId}
        className={navBarDropdownClasses}
        style={style ?? undefined}
      >
        {items.map(renderDropdownItem)}
      </section>
    </section>
  )
}

export default NavBarDropdown
