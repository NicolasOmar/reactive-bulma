import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { NavbarDropdownProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { NavbarItem } from '../../atoms'
import { NavbarItemProps } from '../../../interfaces/atomProps'
import { generateKey } from '../../../functions/generators'

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
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
  const navbarDropdownContainerClasses = parseClasses([
    'navbar-item',
    'has-dropdown',
    position,
    isActive ? 'is-active' : null,
    isHoverable ? 'is-hoverable' : null,
    hasDropdownUp ? 'has-dropdown-up' : null,
    containerCssClasses
  ])
  const navbarDropdownContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'navbar-dropdown-container',
      parsedClasses: navbarDropdownContainerClasses,
      rules: [
        { regExp: /navbar-item|has-dropdown/gm, replacer: '' },
        { regExp: /is-|has-/gm, replacer: '-' }
      ]
    })
  const navbarDropdownClasses = parseClasses([
    'navbar-dropdown',
    hasBoxedMenu ? 'is-boxed' : null,
    cssClasses
  ])
  const navbarDropdownTestId =
    testId ??
    parseTestId({
      tag: 'navbar-dropdown',
      parsedClasses: navbarDropdownClasses
    })

  const renderDropdownItem = (
    dropdownItemConfig: NavbarItemProps | 'divider'
  ) =>
    dropdownItemConfig === 'divider' ? (
      <hr
        key={`navbar-dropdown-divider-${generateKey()}`}
        className='navbar-divider'
      />
    ) : (
      <NavbarItem
        key={`navbar-dropdown-item-${generateKey()}`}
        {...dropdownItemConfig}
      />
    )

  return (
    <section
      data-testid={navbarDropdownContainerTestId}
      className={navbarDropdownContainerClasses}
      style={containerStyle ?? undefined}
    >
      <a className='navbar-link'>{text}</a>

      <section
        data-testid={navbarDropdownTestId}
        className={navbarDropdownClasses}
        style={style ?? undefined}
      >
        {items.map(renderDropdownItem)}
      </section>
    </section>
  )
}

export default NavbarDropdown
