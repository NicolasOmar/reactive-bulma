import React, { Fragment, useMemo } from 'react'
// COMPONENTS
import { NavBarItem } from '@components/atoms'
// TYPES & INTERFACES
import { NavBarDropdownProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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
  hasBoxedMenu = false,
  isArrowLess = null
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
  const navBarLinkClasses = parseClasses([
    'navbar-link',
    isArrowLess ? 'is-arrowless' : null
  ])
  const navBarDropdownTestId =
    testId ??
    parseTestId({
      tag: 'navbar-dropdown',
      parsedClasses: navBarDropdownClasses
    })

  const memoizedNavbarItems = useMemo(
    () =>
      items.map(_itemConfig => {
        const isDividerItem = _itemConfig === 'divider'
        const itemKey = isDividerItem
          ? 'navbar-dropdown-divider'
          : 'navbar-dropdown-item'
        return (
          <Fragment>
            {isDividerItem ? (
              <hr
                key={`${itemKey}-${generateKey()}`}
                className='navbar-divider'
              />
            ) : (
              <NavBarItem
                key={`${itemKey}-${generateKey()}`}
                {..._itemConfig}
              />
            )}
          </Fragment>
        )
      }),
    [items]
  )

  return (
    <section
      data-testid={navBarDropdownContainerTestId}
      className={navBarDropdownContainerClasses}
      style={containerStyle ?? undefined}
    >
      <a
        className={navBarLinkClasses}
        aria-hidden='true'
      >
        {text}
      </a>

      <section
        data-testid={navBarDropdownTestId}
        className={navBarDropdownClasses}
        style={style ?? undefined}
      >
        {memoizedNavbarItems}
      </section>
    </section>
  )
}

export default NavBarDropdown
