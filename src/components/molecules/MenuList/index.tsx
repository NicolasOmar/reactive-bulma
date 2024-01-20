import React from 'react'
// COMPONENTS
import { MenuItem } from '../../atoms'
// TYPES & INTERFACES
import { MenuListProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const MenuList: React.FC<MenuListProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  itemList
}) => {
  const menuListClasses = parseClasses(['menu-list', cssClasses])
  const menuListTestId =
    testId ?? parseTestId({ tag: 'menu-list', parsedClasses: menuListClasses })

  return (
    <ul
      data-testid={menuListTestId}
      className={menuListClasses}
      style={style ?? undefined}
    >
      {itemList.map(item => {
        if ('subListTitle' in item) {
          return (
            <li key={`sub-list-menu-item-${generateKey()}`}>
              <MenuItem {...item.subListTitle} />
              <ul>
                {item.subItems.map(subItem => (
                  <MenuItem
                    key={`sub-list-menu-sub-item-${generateKey()}`}
                    {...subItem}
                  />
                ))}
              </ul>
            </li>
          )
        } else {
          return (
            <MenuItem
              key={`sub-list-item-${generateKey()}`}
              {...item}
            />
          )
        }
      })}
    </ul>
  )
}

export default MenuList
