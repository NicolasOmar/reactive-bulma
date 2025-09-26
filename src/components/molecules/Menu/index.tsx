import React from 'react'
// COMPONENTS
import MenuList from '../MenuList'
// TYPES & INTERFACES
import { MenuProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

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
      {menuSections.map(section => (
        <React.Fragment key={`section-${generateKey()}`}>
          <p
            key={`section-label-${generateKey()}`}
            className='menu-label'
          >
            {section.label}
          </p>
          <MenuList
            key={`section-menu-list-${generateKey()}`}
            itemList={section.itemList}
          />
        </React.Fragment>
      ))}
    </aside>
  )
}

export default Menu
