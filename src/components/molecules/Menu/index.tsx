import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { MenuProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import MenuList from '../MenuList'

const Menu: React.FC<MenuProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  menuSections
}) => {
  const menuClasses = parseClasses(['menu', cssClasses])
  const menuTestId =
    testId ?? parseTestId({ tag: 'menu', parsedClasses: menuClasses })

  return (
    <aside
      data-testid={menuTestId}
      className={menuClasses}
      style={style ?? undefined}
    >
      {menuSections.map((section, i) => (
        <React.Fragment key={`section-${i}`}>
          <p
            key={`section-label-${i}`}
            className='menu-label'
          >
            {section.label}
          </p>
          <MenuList
            key={`section-menu-list-${i}`}
            itemList={section.itemList}
          />
        </React.Fragment>
      ))}
    </aside>
  )
}

export default Menu
