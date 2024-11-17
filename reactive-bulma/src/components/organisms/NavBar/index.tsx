import React from 'react'
// COMPONENTS
import { NavBarItem } from '../../atoms'
import { NavBarBrand, NavBarDropdown } from '../../molecules'
// TYPES & INTERFACES
import { NavBarMenuProps, NavBarProps } from '../../../interfaces/organismProps'
import { NavBarItemProps } from '../../../interfaces/atomProps'
import { NavBarDropdownProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderNavBarMenuSection = (
  menuSectionConfig: NavBarMenuProps | null,
  menuSection: 'start' | 'end',
  testId: string
) =>
  menuSectionConfig ? (
    <section
      data-testid={`${testId}-${menuSection}`}
      className={`navbar-${menuSection}`}
    >
      {menuSectionConfig.itemList.map(itemConfig =>
        (itemConfig as NavBarItemProps).children !== undefined ? (
          <NavBarItem
            key={`navbar-section${menuSection}-${generateKey()}`}
            {...(itemConfig as NavBarItemProps)}
          />
        ) : (
          <NavBarDropdown
            key={`navbar-section${menuSection}-${generateKey()}`}
            {...(itemConfig as NavBarDropdownProps)}
          />
        )
      )}
    </section>
  ) : null

const NavBar: React.FC<NavBarProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  brandConfig = null,
  itemsAtStart = null,
  itemsAtEnd = null,
  fixedPosition = null,
  color = null,
  isTransparent = false,
  isSpaced = false,
  hasShadow = false
}) => {
  const navBarClasses = parseClasses([
    'navbar',
    fixedPosition,
    color,
    isTransparent ? 'is-transparent' : null,
    isSpaced ? 'is-spaced' : null,
    hasShadow ? 'has-shadow' : null,
    cssClasses
  ])
  const navBarTestId =
    testId ??
    parseTestId({
      tag: 'navbar',
      parsedClasses: navBarClasses,
      rules: [
        { regExp: /is-|has-/gm, replacer: '-' },
        { regExp: /navbar/gm, replacer: '' }
      ]
    })

  return (
    <nav
      data-testid={navBarTestId}
      className={navBarClasses}
      style={style ?? undefined}
    >
      {brandConfig ? (
        <section
          data-testid='navbar-brand'
          className='navbar-brand'
        >
          {<NavBarBrand {...brandConfig} />}
        </section>
      ) : null}

      <section className='navbar-menu'>
        {renderNavBarMenuSection(itemsAtStart, 'start', navBarTestId)}
        {renderNavBarMenuSection(itemsAtEnd, 'end', navBarTestId)}
      </section>
    </nav>
  )
}

export default NavBar
