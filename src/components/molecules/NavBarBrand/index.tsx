import React from 'react'
// COMPONENTS
import { Image, NavBarItem } from '../../atoms'
// TYPES & INTERFACES
import { NavBarBrandProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const NavBarBrand: React.FC<NavBarBrandProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  brandConfig,
  isBurgerActive = false
}) => {
  const navBarBrandClasses = parseClasses(['navbar-brand', cssClasses])
  const navBarBrandTestId =
    testId ??
    parseTestId({ tag: 'navbar-brand', parsedClasses: navBarBrandClasses })
  const navBarBurgerClasses = parseClasses([
    'navbar-burger',
    isBurgerActive ? 'is-active' : null
  ])
  const navBarBurgerTestId = parseTestId({
    tag: 'navbar-burger',
    parsedClasses: navBarBurgerClasses
  })
  const { children, ...brandItemConfig } = brandConfig

  return (
    <section
      data-testid={navBarBrandTestId}
      className={navBarBrandClasses}
      style={style ?? undefined}
    >
      {
        <NavBarItem {...brandItemConfig}>
          <Image {...children} />
        </NavBarItem>
      }

      <a
        role='button'
        data-testid={navBarBurgerTestId}
        className={navBarBurgerClasses}
        aria-label='menu'
        aria-expanded='false'
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </a>
    </section>
  )
}

export default NavBarBrand
