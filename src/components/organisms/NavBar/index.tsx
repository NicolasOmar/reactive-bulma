import React, { useCallback, useMemo } from 'react'
// COMPONENTS
import { NavBarItem } from '@components/atoms'
import { NavBarBrand, NavBarDropdown } from '@components/molecules'
// TYPES & INTERFACES
import { NavBarMenuProps, NavBarProps } from '@interfaces/organismProps'
import { NavBarItemProps } from '@interfaces/atomProps'
import { NavBarDropdownProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
import { TEST_ID_REGEXP } from '@constants/regExp'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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
            key={`navbar-section-${menuSection}-${generateKey()}`}
            {...(itemConfig as NavBarItemProps)}
          />
        ) : (
          <NavBarDropdown
            key={`navbar-section-${menuSection}-${generateKey()}`}
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
  const navBarBaseClass = 'navbar'
  const navBarClasses = parseClasses([
    navBarBaseClass,
    fixedPosition,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    isTransparent ? COMMON_CLASSES.TRANSPARENT : null,
    isSpaced ? COMMON_CLASSES.SPACED : null,
    hasShadow ? COMMON_CLASSES.SHADOW : null,
    cssClasses
  ])
  const navBarTestId =
    testId ??
    parseTestId({
      tag: navBarBaseClass,
      parsedClasses: navBarClasses,
      rules: [
        { regExp: TEST_ID_REGEXP.IS_HAS, replacer: '-' },
        { regExp: TEST_ID_REGEXP.NAVBAR, replacer: '' }
      ]
    })

  const memoizedBrand = useMemo(
    () =>
      brandConfig ? (
        <section
          data-testid='navbar-brand'
          className='navbar-brand'
        >
          {<NavBarBrand {...brandConfig} />}
        </section>
      ) : null,
    [brandConfig]
  )

  const memoizedMenuSection = useCallback(
    (
      menuSectionConfig: NavBarMenuProps | null,
      menuSection: 'start' | 'end',
      testId: string
    ) => renderNavBarMenuSection(menuSectionConfig, menuSection, testId),
    []
  )

  return (
    <nav
      data-testid={navBarTestId}
      className={navBarClasses}
      style={style ?? undefined}
    >
      {memoizedBrand}
      <section className='navbar-menu'>
        {memoizedMenuSection(itemsAtStart, 'start', navBarTestId)}
        {memoizedMenuSection(itemsAtEnd, 'end', navBarTestId)}
      </section>
    </nav>
  )
}

export default NavBar
